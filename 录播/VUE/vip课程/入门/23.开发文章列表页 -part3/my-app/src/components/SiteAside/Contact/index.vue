<template>
  <div class="contact-li">
    <div class="QRCode" v-if="imgUrl">
      <img :src="imgUrl" alt="" />
    </div>
    <a :href="url"
      ><Icon :type="type" /><span>{{ text }}</span></a
    >
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  props: {
    type: {
      type: String,
      default: "weixin",
    },
    text: {
      type: String,
      default: "WX115255",
    },
    imgUrl: {
      type: String,
    },
    url: {
      typr: String,
    },
  },
  components: {
    Icon,
  },
};
</script>

<style scoped lang="less">
@import url("~@/styles/mixin.less");
@import url("~@/styles/var.less");
.contact-li {
  &:hover a{
    color: @primary;
  }
  cursor: pointer;
  width: 100%;
  position: absolute;
  a {
    width: 100%;
    & span {
      padding-left: 10px;
      font-size: 14px;
    }
    & i {
      vertical-align: middle;
      font-size: 28px;
    }
  }
  &:hover .QRCode {
    transform: rotateX(0);
  }
  .QRCode {
    width: 150px; 
    height: 150px;
    border-radius: 5px;
    background-color: #ddd;
    position: absolute;
    top: -160px;
    transform: rotateX(90deg);
    transform-origin: bottom;
    transition: all 0.3s;
    &::after {
      content: "";
      display: block;
      width: 15px;
      height: 15px;
      background: #ddd;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
    }
    img {
      width: 90%;
      height: 90%;
      .self-center();
      z-index: 2;
    }
  }
}
</style>