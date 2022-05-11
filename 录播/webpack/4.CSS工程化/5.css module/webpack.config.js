const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = function () {
    return {
        mode: "development",
        devtool: "source-map",
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ["style-loader", {
                        loader: "css-loader",
                        options : {
                            modules:true
                        }
                    }]
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