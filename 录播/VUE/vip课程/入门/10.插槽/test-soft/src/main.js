import { createApp } from 'vue'
import App from './App.vue'
import "@/styles/global.less"
import router from "@/router.js"


// createApp(App).mount('#app')
// 5. 创建并挂载根实例
const app = createApp(App)
// 确保 _use_ 路由实例使
// 整个应用支持路由。
app.use(router)
 

app.mount('#app')

// 现在，应用已经启动了！