<template>
  <div id="app">
    <Layout>
      <template v-slot:left>
        <div class="left"></div>
      </template>
        <div class="content"></div>
      <template v-slot:right>
        <div class="right"></div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./index.vue";
import SiteAside from "@/components/SiteAside/index.vue";
export default {
  components: {
    Layout,
    SiteAside,
  },
};
</script>

<style scoped lang="less">
#app {
  // position: absolute;
  margin: 50px auto;
  width: 800px;
  height: 500px;
  .left {
      width: 250px;
      height: 100%;
      background-color: black;
      flex: 0 0 auto;
    }
    .content{
      height: 100%;
      width: 100%;
      background: rgb(158, 102, 102);
      flex: 1 1 auto;
    }
    .right {
      width: 200px;
      height: 100%;
      background: #ada;
      flex: 0 0 auto;
    }
}
</style>