<template>
  <div class="blogcomment-li" id="blogcomment">
    <MessageArea
      @submit="submit"
      :list="data.rows"
      title="评论区"
      :subTitle="`(${data.total})`"
      :isListLoading="isLoading"
    />
  </div>
</template>

<script>
import { getComments, postComment } from "@/api/blog";
import MessageArea from "@/components/MessageArea";
import getDataMixin from "@/mixins/getDataMixin";
export default {
  created() {
    this.$bus.$on("moveScroll", this.handleScroll);
  },
  mixins: [getDataMixin({ total: 0, rows: [] })],
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  components: {
    MessageArea,
  },
  methods: {
    handleScroll(ele) {
      if(!ele) return;
      if(this.isLoading || this.loadComplete) return;
      const range = 200;
      const x = ele.scrollHeight - ele.scrollTop - ele.clientHeight;
      if (x < range) {
        this.scrollBottomGetData();
      }
    },
    async scrollBottomGetData() {
      this.isLoading = true;
      this.page++;
      const resp = await this.getData(
        this.$route.params.blogid,
        this.page,
        this.limit
      );
      this.data.rows = this.data.rows.concat(resp.rows);
      this.data.total = resp.total;
      this.isLoading = false;
    },
    async submit(commentInfo, callback) {
      this.isLoading = true;
      var addData = await postComment({
        blogid: this.$route.params.blogid,
        ...commentInfo,
      });
      this.isLoading = false;

      this.data.rows.unshift(addData);
      this.data.total++;

      callback();
    },
    async getData() {
      return await getComments(
        this.$route.params.blogid,
        this.page,
        this.limit
      );
    },
  },
  computed: {
    loadComplete() {
      return this.data.rows.length > this.data.total;
    },
  },
};
</script>

<style lang="less" scoped>
.blogcomment-li {
  width: 100%;
}
</style>