import Mock, { mock } from "mockjs";
import qs from "qs";

Mock.mock("/api/blogtype", "get", {
	code: 0,
	msg: "",
	"data|10-25": [{
		"id|+1": 1,
		name: "分类@id",
		"articleCount|0-300": 10, // 该分类下文章的数量
		"order|+1": 1
	}]
});

Mock.mock(/^\/api\/blog(\?.+)?$/,"get", function(options){
	const params = qs.parse(options.url);
	return Mock.mock({
		code:0,
		msg:"",
		data:{
			"tootal|2000-3000":0, // 总数
			[`rows|${params.limit}`]:[{ // 当前页列表数据
				id:"@guid",
				title: "@ctitle(10,50)",
				description: "@cparagraph(1,10)",
				category: { // 所属分类
					"id|1-10": 0,
					name: "分类@id"
				},
				"scanNumber|0-3000": 0, // 浏览量
				"commentNumber|0-300": 30, // 评论数量
				"thumb|1": ["@image('300x250','@color','#fff','@natural')",null],	// 图片地址
				createDate: `@date('T')`
			}]
		}
	})
})