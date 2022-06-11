module.exports = class MyPlugin {
    apply(compiler) {
        console.log("开始编译");
        compiler.hooks.done.tap("my-plugin-done",function(compilation){
            console.log("编译成功");
        })
    }
}