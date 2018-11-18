const {join} = require('path'),
      {DefinePlugin} = require('webpack'),
      {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

module.exports = {
    entry: './src/main.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            res: join(__dirname, 'res')
        }
    },
    output: {
        path: join(__dirname, 'public'),
        filename: 'bundle.js',
        chunkFilename: '[chunkhash].js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.pcss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]__[hash:base64:10]'
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /assets.*\.(woff|woff2|svg|png|jpg)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][hash:10].[ext]'
                }
            },
            {
                test: /res.*\.(woff|woff2|svg|png|jpg)$/,
                use: ['url-loader']
            }
        ]
    },
    plugins: [
        new DefinePlugin({
            'process.env': {
                'API': JSON.stringify('')
            }
        }),
        process.argv.includes('--analyzer') &&
            new BundleAnalyzerPlugin()
    ].filter(p => p)
};
