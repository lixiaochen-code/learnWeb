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
    <div class="top" v-show="isShow" ref="top">TOP</div>
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
  data () {
    return {
      isShow:false
    }
  },
  methods: {
    topChange(ele){
      let y = ele.scrollTop;
      if(y > 1000) {
        this.isShow = true;
        this.$refs.top.addEventListener("click",function(){
          ele.scrollTop = 0;
        })
      } else {
        this.isShow = false;
      }
    }
  },
  created () {
    this.$bus.$on("moveScroll",this.topChange);
  },
  destroyed () {
    this.$bus.$off("moveScroll",this.topChange);
  }
};
</script>

<style scoped lang="less">
@import url("@/styles/mixin.less");
@import url("@/styles/var.less");
#app {
  .self-fill(fixed);
  .top {
    width: 70px;
    height: 70px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    background: @primary;
    border-radius: 50%;
    color: #fff;
    line-height: 70px;
    text-align: center;
    font-weight: 600;
    cursor: pointer;
  }
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