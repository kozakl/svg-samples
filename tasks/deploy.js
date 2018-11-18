import {exec, execSync} from 'child_process';
import {copySync, existsSync,
        removeSync, renameSync,
        readFileSync, writeFileSync} from 'fs-extra';
import {join} from 'path';

const server = process.argv[2],
      name = require('../package.json').name;
try {
    const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim(),
          tag = execSync('git tag').toString().length &&
                execSync('git describe --tags --abbrev=0').toString().trim();
    if (branch === 'master' && tag)
        deploy(join(name, tag));
    else
        deploy(join(name, branch));
} catch(error) {
    deploy(name);
}

function deploy(project)
{
    removeSync(join(server, project));
    copySync('./public', join(server, project));
    if (existsSync(join(server, project, 'bundle.js'))) {
        const cache = Math.random();
        renameSync(join(server, project, 'bundle.js'),
                   join(server, project, `bundle-${cache}.js`));
        writeFileSync(join(server, project, 'index.html'),
            readFileSync(join(server, project, 'index.html'), 'utf8')
                .replace('bundle.js', `bundle-${cache}.js`));
    }
    
    const git = exec(`cd ${server} &&\
                      git add . &&\
                      git commit -m "Update: ${project}." &&\
                      git push origin`);
    git.stdout.on('data', console.log);
    git.stderr.on('data', console.log);
}
