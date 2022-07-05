const axios = require("axios");
const cheerio = require("cheerio");

// 拿到页面的html
async function getHtml() {
	const resp = await axios.get("https://movie.douban.com/chart");
	return resp.data;
}



async function getMovies() {
	const htmlStr = await getHtml();
	const dom = cheerio.load(htmlStr);
	const trs = dom("tr.item");
	let arr = [];
	for(let i =0; i < trs.length; i++){
		let tr = trs[i];
		let data = getMoviesData(dom(tr));
		arr.push(data);
	}
	return JSON.stringify(arr);
}

function getMoviesData(dom){
	let name = dom.find("div.pl2 a").text();
	name = name.replace(/\s/g, "");		// 去掉空白
	name = name.split("/")[0];
	let imgSrc = dom.find("a.nbg img").attr("src");
	let toStar = dom.find("div.pl2 p.pl").text();
	return {
		name,
		imgSrc,
		toStar
	}
}

module.exports = getMovies;
