<template>
  <ul class="commentlist-li">
    <li v-for="item in list" :key="item.id">
      <div class="left">
        <Avatar :url="item.avatar" :size="48" />
      </div>
      <div class="right">
        <div class="info">
          <div class="name">{{ item.nickname }}</div>
          <div class="date">{{ formatDate(item.createDate, true) }}</div>
        </div>
        <div class="content">{{ item.content }}</div>
      </div>
    </li>
  </ul>
</template>

<script>
import { formatDate } from "@/utils";
import Avatar from "@/components/Avatar/";
export default {
  props: {
    list:{
      type:Array,
      default:() => []
    }
  },
  methods: {
    formatDate,
  },
  components: {
    Avatar,
  },
};
</script>

<style lang="less" scoped>
@import url("@/styles/var.less");
.commentlist-li {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  li {
    width: 100%;
    display: flex;
    div.left {
      max-width: 8%;
      min-width: 60px;
    }
    div.right{
      min-width: 160px;
      width: 92%;
      & .info{
        min-width: 180px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .name {
          color: @success;
        }
        .date {
          color: @gray;
          font-size: 12px;
        }
      }
      .content {
        padding: 1em 0;
        font-size: 14px;
      }
    }
    border-bottom: 1px solid lighten(@gray,20%);
    margin: 20px 0;
  }
}
</style>