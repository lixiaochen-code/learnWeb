<template>
  <ul class="rightlist-li">
    <li v-for="(item, i) in dataList" @click.stop="handleClick(item)" :key="i">
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
      <RightList :dataList="item.children" @select="handleClick" />
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
      if (!item.isSelect) {
        this.$emit("select", item);
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
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
  li {
    padding-top: 20px;
    cursor: pointer;
    span.articleCount {
      padding-left: 20px;
    }
    span.active {
      color: @warn;
    }
    .rightlist-li {
      margin-left: 1em;
    }
  }
}
</style>