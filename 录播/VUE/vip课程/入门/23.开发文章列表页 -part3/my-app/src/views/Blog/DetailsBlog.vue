<template>
  <Layout>
    <template>
      <h1>博客详情页内容</h1>
    </template>
    <template #right>
      <h1>目录</h1>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout"
import getDataMixin from "@/mixins/getDataMixin";
import { getBlog } from "@/api/blog";
export default {
  mixins: [getDataMixin([])],
  methods: {
    async getData() {
      return await getBlog(this.$route.params.blogid)
    },
  },
  components:{
    Layout
  }
};
</script>

<style lang="less" scoped>
</style>