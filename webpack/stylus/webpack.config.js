const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: './css/index.js',
    output: {
        filename: './bundle.js',
    },
    module: {
        rules: [{
            test: /\.styl/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                'postcss-loader',
                "stylus-loader",
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })
    ]
};
