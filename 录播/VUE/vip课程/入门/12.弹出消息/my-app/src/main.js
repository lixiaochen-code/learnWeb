import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less"
import router from "@/router/index"

// 测试一下纯DOM操作  CSS module
// import style from "@/styles/test.module.less"
// var oDiv = document.createElement("div");
// document.body.appendChild(oDiv);
// oDiv.className = style.test;
// console.log(style)
// oDiv.innerHTML = "aaaaaa";

function getDom(comp,props){
  
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')