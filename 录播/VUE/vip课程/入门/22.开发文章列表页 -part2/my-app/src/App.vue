<template>
  <div id="app">
    <Layout>
      <template v-slot:left>
        <div class="left">
          <SiteAside />
        </div>
      </template>
      <template #default>
      <div class="content">
        <router-view></router-view>
      </div>
      </template>
      <template v-slot:right>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout/index.vue";
import SiteAside from "@/components/SiteAside/index.vue";
export default {
  components: {
    Layout,
    SiteAside,
  },
};
</script>

<style scoped lang="less">
@import url("~@/styles/mixin.less");
@import url("~@/styles/var.less");
#app {
  .self-fill(fixed);
  .left {
      width: 250px;
      height: 100%;
      background-color: @dark;
      flex: 0 0 auto;
      position: relative;
    }
    .content{
      position: relative;

      height: 100%;
      width: 100%;
      flex: 1 1 auto;
    }
    .right {
      position: relative;

      width: 200px;
      height: 100%;
      background: #ada;
      flex: 0 0 auto;
    }
}
</style>