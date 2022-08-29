<template>
  <Layout>
    <div class="main-li" v-myLoading="isLoading">
      <BlogDetail :data="data" v-if="!isLoading" />
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="right-li">
        <BlogTOC :toc="data.toc" v-myLoading="isLoading" />
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import getDataMixin from "@/mixins/getDataMixin";
import { getBlog } from "@/api/blog";
import BlogDetail from "./components/BlogDetail";
import BlogTOC from "./components/BlogTOC";

import BlogComment from "./components/BlogComment";
export default {
  mixins: [getDataMixin([])],
  methods: {
    async getData() {
      return await getBlog(this.$route.params.blogid);
    },
  },
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment
  },
};
</script>

<style lang="less" scoped>
.main-li {
  position: relative;
  height: 100%;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  padding: 20px;
}
.right-li {
  position: relative;
  height: 100%;
  width: 260px;
  padding-left: 20px;
  box-sizing: border-box;

  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
</style>