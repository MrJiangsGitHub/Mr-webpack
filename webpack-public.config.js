const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');//html
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//css
const VueLoaderPlugin = require("vue-loader/lib/plugin.js");//vue
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');//清理打包目录dist中的所有文件
const loader = require('sass-loader');
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
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: false
                    }
                }, 'css-loader', 'postcss-loader']
            },
            {
                //打包less文件
                test: /\.less$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: false
                    }
                }, 'css-loader', 'postcss-loader', 'less-loader']
            },
            {
                //打包scss文件
                test: /\.scss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: false
                    }
                }, 'css-loader', 'postcss-loader', 'sass-loader']
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
            },
            { test: /\.vue$/, use: 'vue-loader' }
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
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            // 修正vue导的入路径，导入完整的Vue框架
            'vue$': "vue/dist/vue.js",
            // @指向src目录
            '@': path.join(__dirname, 'src'),
            //配置api目录
            '@api': path.join(__dirname, 'src/api'),
            //配置util目录
            '@util': path.join(__dirname, 'src/util'),
        }
    }

}