<template>
  <div class="testslot">
    <div class="left">
      <h1>左边</h1>
      <slot name="left"></slot>
    </div>
    <div class="right">
      <h1>右边</h1>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {  
  name:"testslot"
}
</script>

<style scoped lang="less">
  .testslot {
    width: 100vw;
    height: 100vh;
    display: flex;
    div {
      width: 50vw;
      height: 100vh;
    }
    .left {
      background-color: rgb(56, 118, 118);
    }
    .right {
      background-color: rgb(89, 139, 123);
    }
  }
</style>