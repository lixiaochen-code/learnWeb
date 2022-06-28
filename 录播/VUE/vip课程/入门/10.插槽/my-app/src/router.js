import VueRouter from "vue-router"

import Home from "@/views/Home"
import About from "@/views/About"
import Blog from "@/views/Blog"
import Project from "@/views/Project"
import Message from "@/views/Message"
// import router from "@/router"

// Vue.config.productionTip = false // 控制台给提示 vue3已删除
Vue.use(VueRouter);   // 使用一个 vue 插件



// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/blog', component: Blog },
  { path: '/project', component: Project },
  { path: '/message', component: Message },
  
]
const router = new VueRouter({
  routes
});
