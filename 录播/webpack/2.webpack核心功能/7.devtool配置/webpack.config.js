module.exports = {
    mode:"development",  // 打包模式
    entry:"./src/index.js",
    output:{
        filename:"main.js"
    },
    // devtool:"eval-source-map" // source map 源码地图
    watch:true
}