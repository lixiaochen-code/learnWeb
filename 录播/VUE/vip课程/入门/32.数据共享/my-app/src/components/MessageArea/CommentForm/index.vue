<template>
  <div class="commentform-li" ref="container">
    <div class="name">
      <input
        class="input"
        v-model.trim="commentInfo.nickname"
        type="text"
        placeholder="用户昵称"
        oninput="if(value.length>10) value=value.slice(0,10)"
      />
      <span>{{commentInfo.nickname.length}}/10</span>
      <p v-show="isShow.nickname">请输入昵称</p>
    </div>
    <div class="content">
      <textarea
        class="input"
        maxlength="300"
        placeholder="请输入内容"
        v-model.trim="commentInfo.content"
        oninput="if(value.length>300) value=value.slice(0,300)"
      ></textarea>
      <span>{{ commentInfo.content.length }}/300</span>
      <p v-show="isShow.content">请输入内容</p>
    </div>
    <div>
      <button @click="trigger" :disabled="isSubmit">{{ isSubmit ? "提交中···" : "提交" }}</button>
    </div>
  </div>
</template>

<script>
// import { postComment } from "@/api/blog";
export default {
  data() {
    return {
      commentInfo: {
        nickname: "",
        content: "",
      },
      isShow:{
        nickname: false,
        content: false,
      },
      isSubmit: false
    };
  },
  methods: {
    trigger() {
      this.commentInfo.nickname == "" ? (this.isShow.nickname = true) : (this.isShow.nickname = false);
      this.commentInfo.content == "" ? (this.isShow.content = true) : (this.isShow.content = false);
      if(this.isShow.nickname || this.isShow.content) {
        return;
      }
      this.isSubmit = true;
      this.$emit("submit", this.commentInfo, (content="评论成功",type="success") => {
      this.$showMessage(content,type,2000,this.$refs.container);
        this.isSubmit = !this.isSubmit;
        this.commentInfo.nickname="";
        this.commentInfo.content = "";
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import url("@/styles/var.less");
.commentform-li {
  width: 100%;
  box-sizing: border-box;
  & > div {
    &.name {
      
    min-width: 250px;
      width: 50%;
      p {
        top: 40px;
      }
    }
    &.content {
      
    min-width: 250px;
      width: 100%;
      p {
        top: 120px;
      }
    }
    margin-bottom: 30px;
    position: relative;
    display: inline-block;
    &:last-child {
      position: static;
      display: block;
    }
    & > span {
      font-size: 10px;
      color: @gray;
      position: absolute;
      right: 5px;
      bottom: 5px;
    }
    & > p {
      position: absolute;
      font-size: 14px;
      padding: 0;
      margin: 0;
      color: @danger;
    }
  }
  .input {
    border: 1px dashed @gray;
    border-radius: 6px;
    padding: 10px;
    outline: none;
    box-sizing: border-box;
    &:hover {
      border: 1px dashed @primary;
    }
    &:focus {
      border: 1px dashed @primary;
    }
  }
  input.input {
    width: 100%;
  }
  textarea.input {
    resize: none;
        width: 100%;
    height: 120px;
    &:hover {
      border: 1px dashed @primary;
    }
    &:focus {
      border: 1px dashed @primary;
    }
  }
  button {
    width: 100px;
    height: 36px;
    border: none;
    border-radius: 6px;
    background: darken(@primary, 10%) ;
    color: white;
    cursor: pointer;
    &:hover {
      background: @primary;
    }
    &:disabled {
      cursor: no-drop;
      background: lighten(@primary, 0%);
    }
  }
}
</style>