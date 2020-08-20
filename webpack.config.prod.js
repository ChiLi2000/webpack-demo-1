const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const base = require('./webpack.config-base.js')
module.exports = {
    ...base,
    mode: 'production',
    plugins: [
        ...base.plugins,
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        })
    ],
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.styl$/,
                loader:[MiniCssExtractPlugin.loader, 'css-loader','stylus-loader']
            },
            {
                test: /\.less$/,
                loader: [MiniCssExtractPlugin.loader, 'css-loader','less-loader']
            },

            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('dart-sass'),
                        },
                    }
                ],
            },
            {
                test: /\.css$/i,
                loader: [MiniCssExtractPlugin.loader,'css-loader']

            },
        ]
    }

};