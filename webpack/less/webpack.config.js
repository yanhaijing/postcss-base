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
            test: /\.less/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                'postcss-loader',
                "less-loader",
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })
    ]
};
