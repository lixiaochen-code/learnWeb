<template>
  <i class="iconfont icon-li" :class="IconClass"></i>
</template>

<script>
const classMap = {
  home: "iconzhuye",
  success: "iconzhengque",
  error: "iconcuowu",
  close: "iconguanbi",
  warn: "iconjinggao",
  info: "iconxinxi",
  blog: "iconblog",
  code: "iconcode",
  about: "iconset_about_hov",
  weixin: "iconweixin",
  mail: "iconemail",
  github: "icongithub",
  qq: "iconsign_qq",
  arrowUp: "iconiconfonticonfonti2copy",
  arrowDown: "iconiconfonticonfonti2",
  empty: "iconempty",
  chat: "iconliuyan"
};
export default {
    data(){
        return {
            classMap
        }
    },
  props: {
    type: {
      type: String,
      required: true,
    }
  },
  computed:{
      // 图标类名
      IconClass:{
          get(){
              return classMap[this.type];
          }
      }
  }
};
</script>

<style scoped>
@import url(//at.alicdn.com/t/font_2164449_nalfgtq7il.css);
</style>