/* *
 * 配置文件 webpack --config "路径"
 * 必须是有效的node代码 只能用  node    代码    （执行过程中需要node环境，只能使用module.exports导出）
 * 基本配置：
mode：编译模式，字符串，取值为development或production，指定编译结果代码运行的环境，会影响webpack对编译结果代码格式的处理
entry：入口，字符串（后续会详细讲解），指定入口文件
output：出口，对象（后续会详细讲解），指定编译结果文件
 * */
module.exports = {
    mode: "development",
    output : {
        filename: "index.js"
    }
}
