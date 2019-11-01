const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // 入口文件配置
    entry: './JS/index.2.js',
    // 出口文件配置项
    output: {
        // 输出的路径，webpack2起就规定必须是绝对路径
        path: path.join(__dirname, '/build'),
        // 输出文件名字
        filename: 'bundle.js',
        publicPath:'/'
    },
    //   mode: 'development' // 默认为production, 可以手动设置为development, 区别就是是否进行压缩混淆
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './HTML/index.2.html'
        }),
        new CleanWebpackPlugin()
    ],

}