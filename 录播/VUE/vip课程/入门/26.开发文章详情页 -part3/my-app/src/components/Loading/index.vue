<template>
  <img class="loading-li" src="@/assets/loading.svg" alt="正在加载中" />
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped lang="less">
@import url("~@/styles/mixin.less");
.loading-li {
  .self-center();
}
</style>