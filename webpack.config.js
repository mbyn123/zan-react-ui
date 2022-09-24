const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'production';


module.exports = {
    entry: './src/lib/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        filename: '[name].[contenthash].js', // 打包文件名称
        library: 'Gu',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias:{
            "@": path.resolve(__dirname, "src"), // 设置别名
            "styles": path.resolve(__dirname, "src/styles"),
            "@doc": path.resolve(__dirname,'src/examples/doc'),
            "@lib": path.resolve(__dirname,'src/lib'),
        },
        modules: [path.resolve(__dirname, 'utils'), 'node_modules']
    },
    module: {
        rules: [
            {
                test:/\.(tsx|jsx)$/,
                exclude: /node-modules/,
                use:[
                    {
                        loader: "babel-loader",
                        options: {plugins: devMode?[require.resolve('react-refresh/babel')]:[]}
                    }
                ]
            },{
                test: /\.css$/,
                use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },{
                test: /\.s[ac]ss$/i,
                use:[
                    {
                        loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            additionalData: `@import "~styles/helper.scss";`,
                        }
                    }
                ]
            },{
                test: /\.(svg|png|jpg|gif)$/,
                type: "asset/resource",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024, // 小于10kb转base64位
                    }
                },
                generator: {
                    filename: 'static/images/[name][ext]', // 文件输出目录和命名
                }
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),

    ]
}