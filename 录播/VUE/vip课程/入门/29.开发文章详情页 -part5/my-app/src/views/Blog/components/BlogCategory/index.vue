<template>
  <div class="blogcategory-li" v-myLoading="isLoading">
    <h4>文章分类</h4>
    <!-- <div class="totalArticles active" ref="total">
      全部<span>{{ totalArticles }}篇</span>
    </div>  -->
    <RightList :dataList="totalData" @select="handleClick" />
  </div>
</template>

<script>
import RightList from "../RightList/index.vue";
import getDataMixin from "@/mixins/getDataMixin";
import * as blog from "@/api/blog";
export default {
  name: "BlogCategory",
  mixins: [getDataMixin([])],
  data() {
    return {
      preItem: null,
    };
  },
  components: {
    RightList,
  },
  // methods: {
  // // 方法一  点击列表转换颜色
  //   async getData() {
  //     return await blog.getBlogType();
  //   },
  //   handleClick(item) {
  //     this.data.forEach((e, i) => {
  //       // this.$set(this.data[0], "isSelect", true);
  //       if(item.id == -1) {
  //         this.$set(this.data[0], "isSelect", true);
  //         this.$router.push({name:"Blog"})
  //       } else{
  //         this.$set(this.data[0], "isSelect", false);
  //       }
  //       if(item.id == i) {
  //         this.$set(this.data[i], "isSelect", true);
  //         this.$router.push({name:"Blogs", params:{
  //           categoryId: i
  //         }})
  //       }
  //       if(this.preItem.id != item.id && this.preItem.id == e.id) {
  //         this.$set(this.data[i], "isSelect", false);
  //       }
  //     });
  //     this.preItem = item
  //   },
  // },
  methods: {
    async getData() {
      return await blog.getBlogType();
    },
    handleClick(item) {
      const query = {
        page: 1,
        limit: this.limit,
      };
      if (item.id == -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          params: {
            categoryId: parseInt(item.id),
          },
          query
        });
      }
    },
  },
  // computed: {
  //   totalArticles() {
  //     return this.data.reduce((r, e) => r + e.articleCount, 0);
  //   },
  //   // 方法一  点击列表转换颜色
  //   totalData() {
  //     if (this.data.length) {
  //       if (this.data[0].id == -1) return this.data;
  //       this.data.unshift({
  //         name: "全部",
  //         id: -1,
  //         articleCount: this.data.reduce((r, e) => r + e.articleCount, 0),
  //         isSelect: true,
  //       });
  //       this.preItem = this.data[0];
  //       return this.data;
  //     }
  //   },
  // },
  computed: {
    categoryId() {
      return this.$route.params.categoryId || -1;
    },
    limit() {
      return this.$route.query.limit || 10;
    },
    totalData() {
      let data = [
        {
          name: "全部",
          id: -1,
          articleCount: this.data.reduce((r, e) => r + e.articleCount, 0),
        },
        ...this.data,
      ];
      return data.map((e) => {
        return {
          ...e,
          isSelect: this.categoryId == e.id,
        };
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import url("@/styles/var.less");

.blogcategory-li {
  position: relative;
  width: 260px;
  height: 100%;
  margin-left: 20px;
  overflow: hidden auto;
  .totalArticles {
    padding: 10px 0;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    span {
      padding-left: 20px;
    }
  }
  .active {
    color: @warn;
  }
}
</style>