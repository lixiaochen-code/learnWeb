var path = require("path");
module.exports = {
	mode:"development",
	module:{
		rules:[
			{
				test : /index\.js$/, // 正则表达式，匹配模块路径
				use : [
					// 要使用的加载器
					{
						loader : "./loaders/loader-test.js"	// 加载器的路径
					}
				]
			}
			// 规则1
			// 规则2
			// 规则3	每个规则就是一个对象
		]
	}
}