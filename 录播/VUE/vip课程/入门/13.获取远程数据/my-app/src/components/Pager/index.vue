<template>
  <div class="pager-li" v-if="totalPage>1">
    <a
      href="#"
      :class="{ disabled: current == 1 || totalPage< visiblePagesNumber}"
      @click="changeCurrent(1)"
      v-if="totalPage>visiblePagesNumber"
      >|&lt;&lt;</a
    >
    <a href="#" :class="{ disabled: current == 1 }" @click="changeCurrent(current-1)"
      >&lt;&lt;</a
    >
    <a href="#" v-for="(item, i) in pageArr" :key="i"  :class="{ active: current == item }" @click="changeCurrent(item)">{{
      item
    }}</a>
    <a href="#" @click="changeCurrent(current+1)" :class="{ disabled: current == totalPage}">&gt;&gt;</a>
    <a href="#" @click="changeCurrent(totalPage)"  :class="{ disabled: current == totalPage || totalPage< visiblePagesNumber}" v-if="totalPage>visiblePagesNumber">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
  props: {
    // 当前页码
    current: {
      type: Number,
      default: 1,
    },
    // 总数据量
    total: {
      type: Number,
      default: 0,
    },
    // 页容量
    limit: {
      type: Number,
      default: 10,
    },
    // 可见页码数
    visiblePagesNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    // 总页码
    totalPage: {
      get() {
        return Math.ceil(this.total / this.limit);
      },
    },
    pageArr: {
      get() {
        // arr 可见页码数组
        var start,
          end,
          arr = [];
        if (this.totalPage > this.visiblePagesNumber) {
          if (this.current <= Math.floor(this.visiblePagesNumber / 2)) {
            start = 1;
            end = this.visiblePagesNumber;
          } else if (
            this.current >
            this.totalPage - Math.ceil(this.visiblePagesNumber / 2)
          ) {
            start = this.totalPage - this.visiblePagesNumber + 1;
            end = this.totalPage;
          } else {
            start = this.current - Math.floor(this.visiblePagesNumber / 2);
            end = this.current + Math.ceil(this.visiblePagesNumber / 2)-1;
          }
        } else {
          start = 1;
          end = this.totalPage;
        }
        for (let i = start; i <= end; i++) {
          arr.push(i);
        }
        return arr;
      },
    },
  },
  methods: {
    changeCurrent(index) {
      if(index == this.current){
        return;
      }
      if (index <= this.totalPage && index > 0) {
        this.$emit("changeCurrent", index);
      }
    },
  },
};
</script>

<style scoped lang="less">
// 样式里面～@表示src目录
// 脚本里面@表示src目录
@import url("~@/styles/var.less");

.pager-li {
  display: flex;
  justify-content: center;

  a {
    cursor: text;
    padding: 0 10px;
    color: @primary;

    &.active {
      color: @words;
      font-weight: 900;
    }

    &.disabled {
      color: @gray;
      cursor: not-allowed;
    }
  }
}
</style>
