//开发环境
const path = require('path')
const { merge } = require('webpack-merge')//合并两个文件夹
const public = require('./webpack-public.config.js')
module.exports = merge(public, {
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: {  //  托管的静态资源目录
            directory: path.join(__dirname, 'dist'),
        },
        compress: true, // gzip压缩
        port: 8090, // 指定端口
        open: true, // 自动打开浏览器
    }

})