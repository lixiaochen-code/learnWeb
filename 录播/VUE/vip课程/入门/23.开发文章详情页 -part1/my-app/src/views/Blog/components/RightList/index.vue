<template>
  <ul class="rightlist-li">
    <li v-for="(item, i) in dataList" @click="handleClick(item)" :key="i">
        <span
          :class="{
            active: item.isSelect,
          }"
          >{{ item.name }}</span
        >
        <span
          :class="{
            active: item.isSelect,
          }"
          class="articleCount"
          v-if="item.articleCount"
          >{{ item.articleCount }}篇</span
        >
      <RightList :dataList="item.children" @handleClick="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    dataList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      if(!item.isSelect){
        this.$emit("handleClick", item);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import url("@/styles/var.less");
.rightlist-li {
  position: relative;
  width: 100%;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
  li {
    padding: 10px 0;
    cursor: pointer;
    span.articleCount {
      padding-left: 20px;
    }
    span.active {
      color: @warn;
    }
  }
  .rightlist-li {
    margin-left: 1em;
  }
}
</style>