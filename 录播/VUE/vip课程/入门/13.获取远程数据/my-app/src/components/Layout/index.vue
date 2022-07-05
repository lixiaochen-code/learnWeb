<template>
  <div class="layout-li">
    <div class="left">
      <slot name="left"></slot>
    </div>
      <slot></slot>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
    components:{
    }
}
</script>

<style scoped lang="less">
  .layout-li {
    width: 100%;
    height: 100%;
    display: flex;
  }
</style>