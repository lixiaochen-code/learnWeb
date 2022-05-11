var path = require("path");
module.exports = {
    mode : "development",
    // watch : true,
    devtool : "eval-source-map",
    entry: {
        // 入口
        index:path.resolve(__dirname,"src/index.js")
    },
    output : {
        filename: "[name]-[chunkhash:5].js",
        path:path.resolve(__dirname,"dist")
    }
}