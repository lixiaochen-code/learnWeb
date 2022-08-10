<template>
  <div class="bloglist-li" ref="container" v-myLoading="isLoading">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <a href="javascript:void(0)">
            <img :src="item.thumb" :alt="item.title" :title="item.title" />
          </a>
        </div>
        <div class="content">
          <div class="title">
            <a href="javascript:void(0)">{{ item.title }}</a>
          </div>
          <div class="info">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <span>{{ item.category.name }}</span>
          </div>
          <div class="description">{{ item.description }}</div>
        </div>
      </li>
    </ul>
    <Pager
      :total="1000"
      :current="infoRoute.page"
      :limit="infoRoute.limit"
      @changeCurrent="changeCurrent"
      v-if="data.rows"
    />

  </div>
</template>

<script>
import getDataMixin from "@/mixins/getDataMixin";
import * as blog from "@/api/blog";
import Pager from "@/components/Pager/index.vue";
import { formatDate } from "@/utils";
export default {
  mixins: [getDataMixin({})],
  components: {
    Pager,
  },
  methods: {
    formatDate,
    async getData() {
      return await blog.getBlogs(
        this.infoRoute.page,
        this.infoRoute.limit,
        this.infoRoute.categoryId
      );
    },
    changeCurrent(index) {
      if (this.infoRoute.categoryId == -1) {
        this.$router.push({
          name: "Blog",
          query: { page: index, limit: this.infoRoute.limit },
        });
      } else {
        this.$router.push({
          name:"CategoryBlog  ",
          query: { page: index, limit: this.infoRoute.limit },
          params:{
            categoryId:this.infoRoute.categoryId
          }
        });
      }
    },
  },
  computed: {
    infoRoute() {
      const categoryId = parseInt(this.$route.params.categoryId || -1);
      const limit = parseInt(this.$route.query.limit || 10);
      const page = parseInt(this.$route.query.page || 1);
      return {
        categoryId,
        limit,
        page,
      };
    },
  },
  watch:{
    async $route(newVal,oldVal){
      this.isLoading = true;
      this.$refs.container.scrollTop = 0;
      this.data = await this.getData();
      this.isLoading = false;
    }
  }
};
</script>

<style lang="less" scoped>
@import url("~@/styles/var.less");
.bloglist-li {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden scroll;
  scroll-behavior: smooth;
  ul {
    list-style: none;
    li {
      width: 95%;
      border-bottom: 1px solid @gray;
      display: flex;
      padding: 10px 0;
      .thumb {
        img {
          border-radius: 3%;
          width: 200px;
        }
      }
      .content {
        margin-left: 10px;
        .title a {
          font-size: 24px;
          font-weight: 600;
        }
        .info {
          font-size: 14px;
          color: @gray;
          padding: 10px 0;
          span {
            padding-right: 10px;
          }
        }
        .description {
          font-size: 14px;
        }
      }
    }
  }
  .pager-li {
    padding-bottom: 20px;
  }
}
</style>