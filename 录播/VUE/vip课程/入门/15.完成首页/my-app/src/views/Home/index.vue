<template>
  <div class="home-li">
    <ul>
      <li v-for="item in imgData" :key="item.id">
        <CarouselItem :obj="item" />
      </li>
    </ul>
    <div class="arrowUp">
      <Icon type="arrowUp" />
    </div>
    <div class="arrowDown">
      <Icon type="arrowDown" />
    </div>
    <ul class="circle">
      <li class="active" v-for="item in imgData" :key="item.id"></li>
    </ul>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
import banner from "@/api/banner";
import CarouselItem from "@/views/Home/CarouselItem";
import Icon from "@/components/Icon";
export default {
  data() {
    return {
      imgData: [],
    };
  },
  async created() {
    this.imgData = await banner();
    console.log(this.imgData);
  },
  components: {
    ImageLoader,
    CarouselItem,
    Icon,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";

.home-li {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: @dark;
  & > div {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: all .3s;
    color: gray;
    i {
      font-size: 32px;
      cursor: pointer;
    }
    &.arrowUp {
      top: 15px;
      animation: jump-up 2s  ease-in-out infinite;
    }
    &.arrowDown {
      top: auto;
      bottom: 15px;
      animation: jump-down 2s  ease-in-out infinite;
    }
  }
  .circle {
      .self-center();
      left: auto;
      right: 20px;
    li {
      width: 8px;
      height: 8px;
      margin-bottom: 10px;
      box-sizing: border-box;
      border: 1px solid #fff;
      background-color: gray;
      border-radius: 50%;
      &:nth-of-type(3) {
      margin-bottom: 0;
    }
      &.active{
        background: #fff;
      }
    }
    
  }
}
@keyframes jump-up {
  0% {
    transform: translate(-50%, -10px);
  }
  50% {
    transform: translate(-50%, 10px);
  }
  100% {
    transform: translate(-50%, -10px);
  }
}
@keyframes jump-down {
  0% {
    transform: translate(-50%, 10px);
  }
  50% {
    transform: translate(-50%, -10px);
  }
  100% {
    transform: translate(-50%, 10px);
  }
}
</style>