import Vue from 'vue'
import App from './App.vue'

Vue.prototype.seyHellow =  function(){
  console.log("seyHellow");
}

var vm = new Vue({
  render: h => h(App),
}).$mount('#app')
console.log(vm.seyHellow())
