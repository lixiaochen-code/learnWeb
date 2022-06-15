<template>
  <div id="app">
	<!-- <ImageLoader src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100" @load="load" :durantion="1000" /> -->
	  <Contact type="qq" imgUrl="~@/assets/QQ二维码.png" url="http://wpa.qq.com/msgrd?v=3&uin=1570915261&site=qq&menu=yes" />
  </div>
</template>

<script>
// import Avatar from "./components/Avatar";
// import Icon from "./components/Icon";
// import Pager from "./components/Pager";
// import Empty from "./components/Empty";
import ImageLoader from "./components/ImageLoader";
import Contact from "./components/Contact";
export default {
  // 根组建
  name: 'App',
  components: {
	ImageLoader,
	Contact
  },
  data(){
    return {
    }
  },
  methods:{
    load(dom){
		// dom.parentNode.removeChild(dom);
      console.log("img加载完成");
    }
  },
  computed:{
  }
}
</script> 

<style scoped lang="less">
  #app {
 //    width: 500px;
 //    height: 300px;
	// .imageloader-li {
	// 	left: 50%;
	// }
  }
 //    .iconfont {
 //      font-size: 32px;
 //      color:rgb(255,26,68);
 //    }
	// .empty {
	// 	width: 500px;
	// 	height: 500px;
	// 	background-color: aqua;
	// 	position: relative;
	// }
</style>
