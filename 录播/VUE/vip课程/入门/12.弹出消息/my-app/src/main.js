/*
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2022-06-28 16:02:27
 * @LastEditors: 
 * @LastEditTime: 2022-06-28 17:28:28
 */
import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less"
import router from "@/router/index"

// 弹窗 在每一个组件内快速使用弹框
import {showMessage} from "@/utils"
Vue.prototype.$showMessage = showMessage

// 测试一下纯DOM操作  CSS module
// import style from "@/styles/test.module.less"
// var oDiv = document.createElement("div");
// document.body.appendChild(oDiv);
// oDiv.className = style.test;
// console.log(style) 
// oDiv.innerHTML = "aaaaaa";

// import Icon from "@/components/Icon";
// function aaaa(comp, props) {
//   const vm = new Vue({
//       render: (h) => h(comp, { props }),
//   })
//   vm.$mount()
//   return vm.$el;
// }
// console.log(aaaa(Icon,{type:"home"}))

// import aaaaaa from './utils/showMessage'
// showMessage("弹出消息", "success")




new Vue({
  router,
  render: h => h(App),
}).$mount('#app')