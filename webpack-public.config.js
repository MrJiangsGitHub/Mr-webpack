const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');//html
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//css
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');//清理打包目录dist中的所有文件
module.exports = {
    // 入口entry 出口output 
    entry: "./src/main.js", // 入口
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        // rules:定义loader的打包信息
        rules: [
            {
                // test: 指定后缀的文件
                // use: 用哪些loader进行转化。（多个从右到左开始转换）
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                //打包less文件
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
            },
            {
                //打包scss文件
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                //打包图片、字体资源
                test: /\.(png|jpeg|jpg|gif)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        // 文件大小小于40kb => 打包成base64格式
                        // 否则把图片打包成一个二进制文件
                        // hash就是一个唯一的字符串，类似主键
                        limit: 1024 * 40, // 40kb
                        name: '[name]_[hash:5].[ext]',
                        outputPath: 'images/',
                    }
                }]
            },
            {
                test: /\.(ttf|ttf2|woff|woff2|eot|svg)$/,
                use: [{
                    loader: "url-loader"
                }]
            },
            {
                //打包高级语法(es6)
                test: /\.js$/,
                // exclude：排除指定目录不需要打包处理
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "vue3webpack5",
            template: "./public/index.html",
            favicon: "./public/favicon.ico"
        }),
        //清理打包目录dist中的所有文件
        // new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // 每次打包重命名资源，可以防止客户端缓存
            filename: "[name]-[hash:8].css",
        }),
    ],

}