module.exports = function (loaderStr) {
	console.log("loader-test运行")
	return loaderStr.replace(/变量/g,"var");
}