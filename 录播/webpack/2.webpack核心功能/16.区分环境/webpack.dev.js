var path = require("path");
module.exports = {
    mode: "development",
    watch: true,
    devtool: "source-map",
    entry : path.resolve(__dirname, "src/index.js"),
    output: {
        filename: "dev-[name]-[chunkhash:5].js",
        path: path.resolve(__dirname, "dist")
    }
}