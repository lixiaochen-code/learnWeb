<template>
  <div id="app">
    <HelloWorld @trigger="trigger" />
  </div>
</template>

<script>
import HelloWorld from './components/BtnLoading.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    trigger(num,callback){
      setTimeout(function(){
        callback("有一个错误消息")
      },3000);
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
