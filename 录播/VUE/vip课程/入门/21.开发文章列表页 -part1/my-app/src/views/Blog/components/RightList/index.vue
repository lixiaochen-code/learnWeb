<template>
  <ul class="rightlist-li">
    <li v-for="(item,i) in dataList" :key="i">
        <span @click="handleClick(item)" :class="{
            active:item.isSelect
        }">{{ item.name }}</span>
        <RightList :dataList="item.children" @handleClick="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
    name:"RightList",
    props:{
        dataList:{
            type:Array,
            default: ()=> []
        }
    },
    methods:{
        handleClick(item){
            this.$emit("handleClick",item)
        }
    }
}
</script>

<style lang="less" scoped>
@import url("@/styles/var.less");
 .rightlist-li{
    list-style: none;
    padding: 0;
    margin: 0;
    li{
        margin: 5px 0;
        cursor: pointer;
    }
    span.active{
        color: @warn;
    }
    .rightlist-li {
        margin-left: 1em;
    }
 }
</style>