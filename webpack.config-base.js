const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'chili',
            template: 'src/assets/test.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: ['file-loader'],
            },
            {
                 test: /\.styl$/,
                loader:['style-loader', 'css-loader','stylus-loader']
            },
            {
                test: /\.less$/,
                loader: ['style-loader', 'css-loader','less-loader']
            },

            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('dart-sass'),
                        },
                    }
                ],
            },
]
    }
};