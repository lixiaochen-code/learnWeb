<template>
  <div class="BVue">
    <p>
        数字大小为
      </p>
      <h1>{{ count }}</h1>
      <div class="btnBox">
        <button>异步减小</button>
        <button>增加</button>
      </div>
  </div>
</template>

<script>
export default {
  name: "BVue",
  data() {
    return {
      count: 1,
    };
  },
};
</script>

<style scoped lang="less">
.BVue {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 200px;
  height: 170px;
  border: 1px solid black;
  border-radius: 8px;
  p{
    text-align: center;
    line-height: 65px;
  }
  h1{
    text-align: center;
  }
  .btnBox{
    text-align: center;
    line-height: 65px;
    button{
      padding: 2px 5px;
      margin: 0 2px;
    }
  }
}
</style>
