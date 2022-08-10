<template>
  <div class="blogtoc-li">
    <p>目录</p>
    <RightList :dataList="oToc" @select="handleClick" />
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
  methods:{
    forArr(arr, fun){
            return arr.map(e => {
                if(Array.isArray(e)){
                   return forArr(e,fun);
                }
                return fun && fun(e);
            });
        },
        handleClick(item){
           location.hash = item.anchor;
        }
  },
  computed:{
    icurHash(){
      return this.$route.hash;
    },
    oToc(){
      return this.forArr(this.toc, (e)=>{
        return {
          ...e,
          isSelect: this.icurHash == e.anchor
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
.blogtoc-li {
  p {
    font-size: 16px;
    font-weight: 600;
  }
}
</style>