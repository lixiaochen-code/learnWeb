// const axios = require("axios"); // 特殊的名字不是./  ../开头 使用的是内置模块
// // https://movie.douban.com/chart
// async function test() {
// 	const resp = await axios.get("https://movie.douban.com/chart");
// 	const body = resp.data;
// 	console.log(body);
// }
// test();


// const getMovies = require("./getMovies");
const fs = require("fs");

// getMovies().then(data => {
// 	console.log(data)
// 	fs.writeFile("movies.json", data, function() {
// 		console.log("成功拿到数据！！！");
// 	});
// })


const getPagesImgs = require("./getImgs");
var arr = ["fengjing","meinv","youxi","dongman","yingshi","mingxing","qiche","dongwu","renwu","meishi","zongjiao","beijing"];
arr.forEach((ele,index,self)=>{
	getPagesImgs(ele);
})