<template>
<div class="massage-li">  
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
      this.data = await postComment(commentInfo);
      callback();
      this.isLoading = false;
    },
    async getData(){
      return await getComments(this.blogId,this.page,this.limit);
    }
  },
  computed: {
    blogid(){
      return this.$route.params.blogid;
    }
  }
};
</script>

<style scoped lang="less">
  .massage-li{
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: auto;
    box-sizing: border-box;
    .messagearea-li {
      width: 750px;
    }
  }
</style>