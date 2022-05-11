var devConfig = require("./webpack.dev");
var prodConfig = require("./webpack.prod");
// 
module.exports = env => {
    console.log(env);
    if(evn && evn.prod) {
        return {
            ...prodConfig
            // 导入公共模块展开
        }
    } else {
        return {
            ...devConfig
        }
    }
}