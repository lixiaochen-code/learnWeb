<template>
  <div class="AVue">
    <p>数字大小为</p>
    <h1>{{ $store.state.count }}</h1>
    <div class="btnBox">
      <button @click="handleReduce">减小</button>
      <button @click="handleAsyncIncrease">异步增加</button>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "AVue",
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    handleReduce() {
      this.$store.commit("reduce");
    },
    handleAsyncIncrease(){
      this.$store.dispatch('asyncIncrease')
    }
  },
};
</script>

  <style scoped lang="less">
.AVue {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 200px;
  height: 170px;
  border: 1px solid black;
  border-radius: 8px;
  p {
    text-align: center;
    line-height: 65px;
  }
  h1 {
    text-align: center;
  }
  .btnBox {
    text-align: center;
    line-height: 65px;
    button {
      padding: 2px 5px;
      margin: 0 2px;
    }
  }
}
</style>
  