<template>
  <div id="app">
    <RightList :dataList="dataList" @handleClick="handleCick" />
  </div>
</template>

<script>
import RightList from "./index.vue";
export default {
  components: {
    RightList,
  },
  data(){
    return {
        dataList: [
      { name: "a", isSelect: false },
      { name: "b", isSelect: false },
      { name: "c", isSelect: true },
      {
        name: "d",
        isSelect: false,
        children: [
          { name: "d-1", isSelect: false },
          { name: "d-2", isSelect: false },
          { name: "d-3", isSelect: true },
          { name: "d-4", isSelect: false },
        ],
      },
      {
        name: "e",
        isSelect: false,
        children: [
          { name: "e-1", isSelect: false },
          {
            name: "e-2",
            isSelect: false,
            children: [
              { name: "e-2-1", isSelect: false },
              { name: "e-2-2", isSelect: false },
              { name: "e-2-3", isSelect: false },
              { name: "e-2-4", isSelect: false },
              { name: "e-2-5", isSelect: true },
              { name: "e-2-6", isSelect: false },
            ],
          },
          { name: "e-3", isSelect: false },
        ],
      },
      { name: "f", isSelect: false },
      { name: "g", isSelect: false },
      { name: "h", isSelect: false },
    ],
    }
  },
  methods:{
    handleCick(item){
        console.log(item)
    }
  }
};
</script>

<style>
</style>