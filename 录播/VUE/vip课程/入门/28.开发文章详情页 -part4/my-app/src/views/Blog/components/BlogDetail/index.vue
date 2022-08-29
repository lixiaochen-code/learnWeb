<template>
  <div class="blogdetail-li">
    <div class="title">
      <h1>{{ data.title }}</h1>
    </div>
    <div class="info">
      <span>日期：{{ formatDate(data.createDate) }}</span>
      <span>浏览：{{ data.scanNumber }}</span>
      <span>
        <a href="#blogcomment">评论：{{ data.commentNumber }}</a>
      </span>
      <span>
        <router-link
        :to="{
          name: 'CategoryBlog',
          params: {
            categoryId: data.category.id,
          },
        }"
        >{{ data.category.name }}
      </router-link>
      </span>
    </div>
    <div class="markdown-body" v-html="data.htmlContent"></div>
  </div>
</template>

<script>
import formatDate from "@/utils/formatDate";
import "./markdown.css";
import "highlight.js/styles/vs.css";
export default {
  name: "BlogDetail",
  props: {
    data: {
      required: true,
    },
  },
  methods: {
    formatDate,
  },
};
</script>

<style lang="less" scoped>
@import url("@/styles/var.less");
.blogdetail-li {
  width: 100%;
  .info {
    font-size: 12px;
    color: @gray;
    padding: 10px 0;
    span {
      padding-right: 10px;
    }
  }
  .markdown-body {
    margin: 2em 0;
  }
}
</style>