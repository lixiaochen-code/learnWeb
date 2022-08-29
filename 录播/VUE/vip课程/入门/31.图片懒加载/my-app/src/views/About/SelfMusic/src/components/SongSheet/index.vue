<template>
  <ul v-if="songSheet" class="songsheet-li">
    <li v-for="item in songSheet.data.result" :key="item.id" @click="trigger(item)">
      <div class="picImg">
        <img :src="item.picUrl" :alt="item.name" :title="item.name" />
      </div>
      <div class="title">{{ item.name }}</div>
    </li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      songSheet: null,
    };
  },
  async created() {
    this.songSheet = await axios.get(
      "https://music.cyrilstudio.top/personalized/newsong"
    );
    console.log(this.songSheet)
  },
  methods: {
    trigger(item){
        this.$emit(item);
    }
  }
};
</script>
<style lang="less" scoped>
@import url("@/styles/var.less");
ul.songsheet-li {
  overflow-y: auto;
  overflow-x: hidden;
  position: absolute;
  top: 50px;
  bottom: 60px;
  background: #dad;
  width: auto;
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  margin: 0 auto;
  li {
    cursor: pointer;
    width: 200px;
    height: 80px;
    background: @dark;
    border-radius: 8px;
    overflow: hidden;
    padding: 0;
    margin: 0;
    color: @lightWords;
    margin: 1%;
    display: flex;
    &:hover div.title{
        color: @gray;
    }
    div.picImg {
      width: 40%;
      img {
        object-fit: contain;
        width: 100%;
      }
    }
    div.title {
      height: 100%;
      margin: 0;
      padding: 0;
    }
  }
}
</style>