<template>
  <div id="app">
    <Menu>
      <router-view></router-view>
    </Menu>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue"
  export default {
    components: {
      Menu
    }
  }
</script>

<style lang="less">
#app {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: #2c3e50;
  background-color: #dcdcdc;
  box-sizing: border-box;
  border: 2px solid rgb(255, 0, 0);
}
</style>
