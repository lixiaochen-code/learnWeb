/* function defaultTask(cb) {
    // place code for your default task here
    console.log("aaaaaaaà111111a11a1a1a1a11a1a1")
    cb();
  }
  
exports.default = defaultTask */

// 在gulp里面所有的操作都称为任务
// 公开任务、私有任务
// 导出公开任务 没有导出私有任务
const { series, parallel } = require("gulp");




function html(cb) {
    console.log("html运行了")
    cb()
}
function css(cb) {
    console.log("css运行了")
    cb()
}
function js(cb) {
    console.log("js运行了")
    cb()
}

// series   可以放多个任务 依次执行 会影响之后的任务
// exports.default = series(html, css, js);

// parallel 可以放多个任务 同时执行 不会影响其他任务
// exports.default = parallel(html, css, js);

// 可嵌套运行
// exports.default = series(html,parallel(css, js));

// 处理文件
const { src, dest } = require("gulp");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
// src 入口 输入文件
// 中间操作写在中间 链式操作
// dest 出口 输出文件

// 管道思想 流操作  只有在结束的时候才存储
// 如 less =》 css =》 css加上css3前缀 =》 压缩 =》 输出
exports.default = function () {
    /* return src("./src/js/*.js").pipe(console.log("开始打包！！！"))
    .pipe(uglify())
    .pipe(console.log("打包完成！！！")).pipe(dest("dist/js")); */
    return src("./src/js/*.js")
    .pipe(dest("dist/js"))
    .pipe(uglify())
    .pipe(rename({extname:".min.js"}))
    .pipe(dest("dist/js"));
}




//  文件监控
const { watch } = require("gulp");
// 参数一 监听文件路径  参数二  配置对象    参数三  任务
watch("src/css/*",{
    delay: 2000
},function (cb){
    console.log("文件被修改了");
    cb();
})