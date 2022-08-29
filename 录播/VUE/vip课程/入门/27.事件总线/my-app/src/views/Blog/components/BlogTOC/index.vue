<template>
  <div class="blogtoc-li">
    <p>目录</p>
    <RightList :dataList="toc" @select="handleClick" />
  </div>
</template>

<script>
import RightList from "../RightList"; 
export default {
  components: {
    RightList,
  },
  props: {
    toc: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    forArr(arr, fun) {
      let _this = this;
      return arr.map((e) => {
        if (e.children && Array.isArray(e.children)) {
          return _this.forArr(e.children, fun);
        }
        return fun && fun(e);
      });
    },
    handleClick(item) {
      location.hash = item.anchor;
    },
  },
  computed: {
    icurHash() {
      return this.$route.hash;
    },
    oToc() {
      return this.forArr(this.toc, (e) => {
        return {
          ...e,
          isSelect: this.icurHash == e.anchor,
        };
      });
    },
  },
};
</script>

<style lang="less" scoped>
.blogtoc-li {
  height: 100%;
  p {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    padding-top: 15px;
  }
}
</style>