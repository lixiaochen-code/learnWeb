import Vue from 'vue'
import App from './test.vue'
import "../../styles/global.less"

// Vue.config.productionTip = false // 控制台给提示 vue3已删除

new Vue({
  render: h => h(App),
}).$mount('#app')