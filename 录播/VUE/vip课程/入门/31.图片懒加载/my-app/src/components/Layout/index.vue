<template>
  <div class="layout-li">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped lang="less">
.layout-li {
  width: 100%;
  height: 100%;
  display: flex;
  .left,
  .right {
    flex: 0 0 auto;
    overflow: hidden;
    // scroll-behavior: smooth;
  }
  .main {
    flex: 1 1 auto;
    overflow: hidden;
  }
}
</style>