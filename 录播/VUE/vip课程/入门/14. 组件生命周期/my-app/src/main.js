import "@/mock"
import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less"
import router from "@/router/index"
// 弹窗 在每一个组件内快速使用弹框
import { showMessage } from "@/utils";
Vue.prototype.$showMessage = showMessage;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')