
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
         filename: '[name].[contenthash].js'
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'chili',
        template: 'src/assets/test.html'
    })],
    devtool: 'inline-source-map',
    devServer: {
             contentBase: './dist',
      },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    }

};
