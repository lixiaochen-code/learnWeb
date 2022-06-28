<template>
  <div class="popup">
    <div class="content">
      <slot name="popup-content"></slot>
    </div>
    <div class="btn">
      <button>确认</button>
      <button>关闭</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.popup {
  width: 200px;
  height: 150px;
  background: #ddd;
  border-radius: 10px;
  border: 1px solid #009;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
  .content {
    width: 90%;
    height: 120px;
    border: 1px solid #009;
    .c {
        color: yellow;
        font-size: 12px;
    }
  }
  .btn {
    width: 90%;
    button{
        width: 50%;
    }
  }
}
</style>