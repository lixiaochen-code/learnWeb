import "@/mock"
import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less"
import router from "@/router/index"
// 弹窗 在每一个组件内快速使用弹框
import { showMessage } from "@/utils";
Vue.prototype.$showMessage = showMessage;
// loading 全局指令
import myLoading from "@/directives/Loading"
Vue.directive("myLoading",myLoading);

// import * as Blogs from '@/api/blog';
// getBlogs.getBlogType().then(r=>{
//   console.log(r)
// })
// getBlogs.getBlogs(1,12,1).then(r=>{
//   console.log(r);
// })
// Blogs.getBlog("adadada").then(r=>{
//   console.log(r);
// })

// Blogs.postComment({
//   name:"aaa"
// }).then(r=>{
//   console.log(r);
// })
// Blogs.getComments("adadadad",1,10).then(r=>{
//   console.log(r);
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')