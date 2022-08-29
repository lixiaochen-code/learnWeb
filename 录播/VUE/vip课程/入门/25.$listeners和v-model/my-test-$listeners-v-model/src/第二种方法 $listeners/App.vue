<template>
  <div id="app">
    <HelloWorld @click="handleClick" />
  </div>
</template>

<script>
import HelloWorld from "./components/BtnLoading.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    handleClick() {
      return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve("这里有一个错误消息");
        },3000)
      })
    },
  },
};
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
