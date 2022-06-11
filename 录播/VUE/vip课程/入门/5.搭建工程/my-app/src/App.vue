<template>
  <div id="app">
    <Avatar :size="100" />
    <Avatar :size="200" />
    <Avatar :size="300" />
  </div>
</template>

<script>
import Avatar from "./components/Avatar.vue";
export default {
  // 根组建
  name: 'App',
  components: {
    Avatar
  }
}
</script>

<style lang="less">
</style>
