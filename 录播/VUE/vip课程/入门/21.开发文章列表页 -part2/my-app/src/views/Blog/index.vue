<template>
  <div class="blog-li">
    <div class="right">
      <h4>目录</h4>
      <h4><span>全部</span> <span>{{totalArticles}}篇</span></h4>
      <div><RightList :dataList="data" /></div>
    </div>
  </div>
</template>

<script>
import RightList from "./components/RightList";
import * as Blogs from '@/api/blog';
import getDataMixin from "@/mixins/getDataMixin"
export default {
  mixins:[getDataMixin([])],
  components:{
    RightList
  },
  methods:{
    async getData(){
      return await Blogs.getBlogType();
    }
  },
  computed:{
    totalArticles(){
      console.log(this.$route)
      return this.data.reduce( (r,e)=> r + e.articleCount ,0)
    }
  }
}
</script>

<style>

</style>