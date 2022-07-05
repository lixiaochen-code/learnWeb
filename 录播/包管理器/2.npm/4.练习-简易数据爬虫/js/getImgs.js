const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

async function getHtml(url) {
	const strHtml = await axios.get(url);
	return strHtml.data;
}
// 获取img信息	地址 及 描述
function getImgData(dom) {
	let domI = dom.find("a img");
	let domB = dom.find("a b")
	let src = dom.find(domI).attr("src");
	// let name = domI.attr("alt");
	let name = domB.text();
	name = name.replace(/\s/g, "");
	src = "https://pic.netbian.com" + src;
	return {
		name,
		src
	}
}

// 获取 一个 页面 的 照片
async function getImgDomsDatas(url) {
	const strHtml = await getHtml(url);
	const $ = cheerio.load(strHtml);
	const imgLis = $("div.slist ul.clearfix li");
	let arr = [];
	for (let i = 0; i < imgLis.length - 1; i++) {
		let dom = imgLis[i];
		let data = getImgData($(dom));
		arr.push(data);
	}
	return arr;
}



// 获取整个网站的某个类的照片		需要改进此方法可以拿到其他类的方法		完善中
async function getImgPagesDatas(url) {
	// let arr = [];
	const strHtml = await getHtml(url);
	const $ = cheerio.load(strHtml);
	const page = $("div.page a");
	// const pageNum = parseInt($(page[page.length - 2]).attr("href").substring(17, 20));
	const pageNum = parseInt($(page[page.length - 2]).text());
	console.log(pageNum);
	return pageNum;
}

// module.exports = {
// 	getImgDomsDatas,
// 	getImgPagesDatas
// };

// 拿到所有的img照片传入数组		该照片类别	“dongman”
async function getPagesImgs(lb) {
		let arr = [];
		const cunter = await getImgPagesDatas("https://pic.netbian.com/4k" + lb + "/index.html");
		for (let i = 1; i <= cunter; i++) {
			if (i == 1) {
				arr.push(getImgDomsDatas("https://pic.netbian.com/4k" + lb + "/index.html"));
			} else {
				arr.push(getImgDomsDatas("https://pic.netbian.com/4k" + lb + "/index_" + i + ".html"));
				}
			}
			Promise.all(arr).then(data => {
				fs.writeFile("../images/" + lb + "Imgs.json", JSON.stringify(data), function() {
					console.log("成功拿到数据！！！");
				})
			})
		}
		// getPagesImgs("dongman");
		
module.exports = getPagesImgs;
		
