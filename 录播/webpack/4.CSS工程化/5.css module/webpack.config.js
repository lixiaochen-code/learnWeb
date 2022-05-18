const HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require("path")
module.exports = function () {
    return {
        mode: "development",
        entry: "./src/index.js",
        output: {
            filename: "[name]-[chunkhash:5]",
            path: path.resolve(__dirname, "public")
        },
        devtool: "source-map",
        module: {
            rules: [
                // {
                //     test: /\.css$/,
                //     // style-loader 和 css-loader 同时应用 css-loader 只会暴露一个 类名列表
                //     use: ["style-loader", {
                //         loader: "css-loader",
                //         options: {
                //             modules: true
                //         }
                //     }]
                // }
                {
                    test:/\.css$/,
                    use:["style-loader", "css-loader?modules"]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html"
            })
        ],
        devServer: {
            open: true
        }
    }
}