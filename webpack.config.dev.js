const {
    merge
} = require('webpack-merge');
const baseConfig = require('./webpack.config')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin'); // 错误提示
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(baseConfig,{
    mode:'development',
    entry: './src/examples/index.tsx',
    devtool: "eval-cheap-module-source-map",
    devServer: {
        host:'127.0.0.1',
        hot: true,
        static: true,
        port: '9527',
        open: true,
        compress: true, // 开启gzip压缩 针对开发模式下的文件
        historyApiFallback: true, // 防止 history 路由刷新后空白
    },
    plugins:[
        new FriendlyErrorsWebpackPlugin(),
        new ReactRefreshWebpackPlugin(), // 添加热更新插件
        new HtmlWebpackPlugin({
            template: './public/index.html', // 设置html模板
            title: 'zan-react-ui', // 设置页面标题
            inject: true, // 自动注入静态资源
        }),
    ]
})