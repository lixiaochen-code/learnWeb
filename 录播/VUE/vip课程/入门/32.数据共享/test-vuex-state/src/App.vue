<template>
  <div id="app">
    <AVue />
    <BVue />
  </div>
</template>

<script>
import AVue from './components/A.vue';
import BVue from './components/B.vue';
export default {
  name: 'App',
  components: {
    AVue,
    BVue
  }
}
</script>

<style lang="less">
#app {
  width: 500px;
  height: 500px;
  position: fixed;  
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
