const {join} = require('path'),
      {DefinePlugin} = require('webpack');

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
        chunkFilename: '[name].js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
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
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /res.*\.(woff|woff2|svg|png|jpg)$/,
                use: ['url-loader']
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: 'public/',
        historyApiFallback: true,
        open: 'google-chrome-unstable'
    },
    plugins: [
        new DefinePlugin({
            'process.env': {
                'API': JSON.stringify('')
            }
        })
    ]
};
