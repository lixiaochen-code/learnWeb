var path = require("path");
module.exports = {
    mode:"development",
    entry: {
        // index:"./src/index.js",
        main:["./src/main.js","./src/index.js"] //  
    },
    output:{
        // name chunk名
        // hush hash算法
        // hush:5   取前五位
        // chunkhash    chunk hash
        filename:"[name]-[chunkhash:5].js", // 解决浏览器先用缓存的问题
        path: path.resolve(__dirname, "dist")
    },
    devtool:"eval-source-map",
    // watch:true
}