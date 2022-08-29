<template>
  <div class="blogcomment-li" id="blogcomment">
    <MessageArea @submit="submit" :list="data.rows" title="评论区" :subTitle="`(${data.total})`" :isListLoading="isLoading" />
  </div>
</template>

<script>
import { getComments, postComment } from "@/api/blog";
import MessageArea from "@/components/MessageArea";
import getDataMixin from "@/mixins/getDataMixin";
export default {
  mixins: [getDataMixin({total:0,rows:[]})],
  data () {
    return {
      page:1,
      limit:10
    }
  },
  components: {
    MessageArea,
  },
  methods: {
    async submit(commentInfo, callback) {
      this.isLoading = true;
      var addData = await postComment({
        blogid:this.$route.params.blogid,
        ...commentInfo
      });
      this.isLoading = false;
      
      this.data.rows.unshift(addData);
      this.data.total ++;
      
      callback();
    },
    async getData(){
      return await getComments(this.$route.params.blogid,this.page,this.limit);
    }
  }
};
</script>

<style lang="less" scoped>
.blogcomment-li {
    width: 100%;
}
</style>