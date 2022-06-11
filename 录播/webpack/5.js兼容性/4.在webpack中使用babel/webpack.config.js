const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "index.js",
        // publicPath: "./dist/"
    },
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.js$/,
            use: "babel-loader"
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "./dist/default.html"),
        filename: path.resolve(__dirname, "./dist/index.html"),
    })],
    devServer: {
        static:path.join(__dirname, "dist"),
        compress: true,
        port: 8080
    }
}