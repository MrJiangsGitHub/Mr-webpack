//生产环境
const path = require('path')
const { merge } = require('webpack-merge')//合并两个文件夹
const public = require('./webpack-public.config.js')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//css
module.exports = merge(public, {
    devtool: false,
    plugins: [
        new MiniCssExtractPlugin({
            // 每次打包重命名资源，可以防止客户端缓存
            filename: "[name]-[hash:8].css",
        })
    ]

})