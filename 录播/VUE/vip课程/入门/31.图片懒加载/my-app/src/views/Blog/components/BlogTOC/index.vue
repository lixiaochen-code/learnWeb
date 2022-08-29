<template>
  <div class="blogtoc-li">
    <p>目录</p>
    <RightList :dataList="oToc" @select="handleClick" />
  </div>
</template>

<script>
import RightList from "../RightList";
import { debounce } from "@/utils";
export default {
  created() {
    this.debounceSelectTitleDom = debounce(this.selectTitleDom,5)
    this.$bus.$on("moveScroll", this.debounceSelectTitleDom);
  },
  destroyed () {
    this.$bus.$off("moveScroll", this.debounceSelectTitleDom);
  },
  // updated () {
  //   const hash = location.hash;
  //   location.hash = "";
  //   setTimeout(() => {
  //     location.hash = hash;
  //   }, 10);
  // },
  data() {
    return {
      selectDom: "article-md-title",
    };
  },
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
    handleClick(item) {
      location.hash = item.anchor;
      // this.selectDom = item.anchor;
    },
    forArr(arr, fun) {
      return arr.map((e) => {
        for (let key in e) {
          if (Array.isArray(e[key])) {
            e[key] = e[key].map((e) => {
              return fun(e);
            });
          }
        }
        return fun(e);
      });
    },
    selectTitleDom() {
      this.getTitleDom.forEach((element) => {
        if (!element) {
          return;
        }
        const top = element.getBoundingClientRect().top;
        if (top >= 0 && top <= 200) {
          this.selectDom = element.id;
        } else if (top < 0) {
          this.selectDom = element.id;
        } else {
          return;
        }
      });
    },
  },
  computed: {
    // oToc() {
    //   return this.forArr(this.toc, (e) => {
    //     return {
    //       ...e,
    //       isSelect: e.anchor == this.icurHash,
    //     };
    //   });
    // },
    oToc() {
      const getToc = (arr = []) => {
        return arr.map((e) => {
          return {
            ...e,
            isSelect: e.anchor == this.selectDom,
            children: getToc(e.children),
          };
        });
      };
      return getToc(this.toc);
    },
    getTitleDom() {
      const domArr = [];
      const getDom = (toc) => {
        for (const e of toc) {
          domArr.push(document.getElementById(e.anchor));
          if (e.children && e.children.length) {
            getDom(e.children);
          }
        }
      };
      getDom(this.oToc);
      return domArr;
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