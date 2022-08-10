import Home from "@/views/Home"
import About from "@/views/About"
import Blog from "@/views/Blog"
import Project from "@/views/Project"
import Message from "@/views/Message"



// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
const routes = [
  { name: "Home", path: '/', component: Home },
  { name: "About", path: '/about', component: About },
  { name: "Blog", path: '/blog', component: Blog },
  { name: "CategoryBlog", path: '/blog/cate/:categoryId', component: Blog },
  { name: "Project", path: '/project', component: Project },
  { name: "Message", path: '/message', component: Message }
]
export default routes;