<template>
  <div class="btnloading">
    <button :disabled="isLoading" @click="trigger">{{ isLoading ? "Loading···" : "submit" }}</button>
    <div class="err">{{ err }}</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isLoading:false,
      err:"",
      count:0
    }
  },
  methods: {
    async trigger(){
      this.isLoading = true;
      this.err = "正在加载中···";
      if(this.$listeners.click) {
        this.err = await this.$listeners.click();
        this.isLoading = false;
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .btnloading {
    button {
      border-radius: 20px;
      border: 2px solid gray;
    }
    .err {
      color:#f50 ;
    }
  }
</style>