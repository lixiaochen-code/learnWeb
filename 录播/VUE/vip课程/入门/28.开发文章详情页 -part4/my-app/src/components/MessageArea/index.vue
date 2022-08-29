<template>
  <div class="messagearea-li">
    <CommentForm v-on="$listeners" />
    <h3>{{title}}{{subTitle}}</h3>
    <CommentList :list="list" />
    <div class="loading" v-myLoading="isListLoading"></div>
  </div>
</template>

<script>
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
export default {
  props: {
    title:{
      type:String,
      default:""
    },
    subTitle:{
      type:String,
      default:""
    },
    list:{
      type:Array,
      default:() => []
    },
    isListLoading:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      commentData:[]
    };
  },
  components: {
    CommentForm,
    CommentList,
  }
};
</script> 

<style lang="less" scoped>
.messagearea-li {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  margin: 20px auto;
  width: 100%;
  .loading{
    
  position: relative;
    width: 100%;
    height: 100px;
  }
}
</style>