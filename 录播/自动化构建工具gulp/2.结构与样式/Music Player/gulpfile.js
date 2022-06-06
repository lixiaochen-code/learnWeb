const {src, dest, series, watch} = require("gulp");
const less = require("gulp-less");
const path = require("path");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const htmlClean = require("gulp-htmlclean");
const cssClean = require("gulp-clean-css");
const stripDebug = require("gulp-strip-debug");
const imgMin = require("gulp-imagemin");
const connect = require("gulp-connect");
// 方便以后修改输入输出目录
const folder = {
    src : "src/",
    dist : "dist/"
}
// 任务
function html() {
    return src(folder.src + "html/*")
    .pipe(htmlClean())
    .pipe(dest(folder.dist + "html"))
    .pipe(connect.reload());
}
function css() {
    return src(folder.src + "css/*")
    .pipe(less())
    .pipe(cssClean())
    .pipe(dest(folder.dist + "css"))
    .pipe(connect.reload());
}
function js() {
    return src(folder.src + "js/*")
    // .pipe(stripDebug())
    // .pipe(uglify())
    .pipe(dest(folder.dist + "js"))
    .pipe(connect.reload());
}
function images() {
    return src(folder.src + "images/*")
    .pipe(imgMin())
    .pipe(dest(folder.dist + "images/"))
    .pipe(connect.reload());
}

// 开启本地服务器
function server(cb) {
    connect.server({
        port: 8888,
        livereload: true,
    })
    cb();
}


// 监听
watch("./src/html/*",{},function(cb){
    html();
    cb();
})
watch("./src/css/*",{},function(cb){
    css();
    cb();
})
watch("./src/js/*",{},function(cb){
    js();
    cb();
})
watch("./src/images/*",{},function(cb){
    images();
    cb();
})



exports.default = series(html, css, js, images, server);




// 直接开始监听文件是否变化
// function oWatch(){
//     watch("./src/html/*",{},function(cb){
//         console.log("html改变，重新编译");
//         html();
//         cb();
//     })
//     watch("./src/css/*",{},function(cb){
//         console.log("css改变，重新编译");
//         css();
//         cb();
//     })
//     watch("./src/js/*",{},function(cb){
//         console.log("js改变，重新编译");
//         js();
//         cb();
//     })
//     watch("./src/images/*",{},function(cb){
//         console.log("image改变，重新编译");
//         images();
//         cb();
//     })
// }
// exports.oWatch = oWatch;


// src下任意改变一个文件 整个src目录都会重新编译    ===》   浪费效率
// watch(folder.src, {}, function(cb){
//     series(html, css, js, images);
//     cb();
// })