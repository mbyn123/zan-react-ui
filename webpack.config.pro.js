const { resolve } = require('path')
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer') // 引入分析打包结果插件
// const TerserPlugin = require('terser-webpack-plugin')
const WebpackBar = require('webpackbar')


module.exports = merge(baseConfig, {
    mode: 'production',
    optimization: {
        // 这个选项专门配置代码压缩
        minimizer: [
            // 压缩 css
            new CssMinimizerWebpackPlugin(),
            // 压缩js
            // new TerserPlugin({
            //     parallel: true, // 开启多线程压缩
            //     terserOptions: {
            //         compress: {
            //             pure_funcs: ["console.log"] // 删除console.log
            //         }
            //     }
            // })
        ],
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    priority: 10,
                    minSize: 0, /* 如果不写 0，由于 React 文件尺寸太小，会直接跳过 */
                    test: /[\\/]node_modules[\\/]/, // 为了匹配 /node_modules/ 或 \node_modules\
                    name: 'vendors', // 文件名
                    chunks: 'all',  // all 表示同步加载和异步加载，async 表示异步加载，initial 表示同步加载
                    // 这三行的整体意思就是把两种加载方式的来自 node_modules 目录的文件打包为 vendors.xxx.js
                    // 其中 vendors 是第三方的意思
                },
                common: {
                    priority: 5,
                    minSize: 0,
                    minChunks: 2,
                    chunks: 'all',
                    name: 'common'
                }
            },
        },
    },
    plugins: [
        new WebpackBar(),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: resolve(__dirname, './public'), // 复制public下文件
                    to: resolve(__dirname, './dist'), // 复制到dist目录中
                    filter: source => {
                        return !source.includes('index.html') // 忽略index.html
                    }
                },
            ],
        })
    ]
})