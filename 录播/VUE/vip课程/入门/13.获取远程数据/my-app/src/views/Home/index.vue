<template>
  <div class="home-li">
    <h1>首页</h1>
    <div class="test" ref="test">
      <button @click="hackClick()">点击</button>
    </div>
  </div>
</template>

<script>
import {showMessage, getVueDom} from "@/utils"
export default {
  methods: {
    hackClick(){
      this.$showMessage("弹出消息","success", 2000, this.$refs.test);
    }
  }
}
</script>

<style scoped lang="less">
  .home-li {
    .test{
      width: 500px;
      height: 300px;
      background-color: aquamarine;
    }
  }
</style>