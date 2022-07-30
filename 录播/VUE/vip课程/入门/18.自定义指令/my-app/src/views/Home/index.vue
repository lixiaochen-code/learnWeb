<template>
  <div v-myLoading="isLoading" class="home-li" @wheel="changeImg($event)">
    <ul class="imgBox" ref="imgBox" @transitionend="changeTransitionEnd()">
      <li v-for="item in imgList" :key="item.id">
        <CarouselItem
          :obj="item"
          :scale="1.1"
          :imgHeight="imgHeight"
          :imgWidth="imgWidth"
        />
      </li>
    </ul>
    <div
      class="arrowUp"
      @click="changeImg($event, current - 1)"
      v-show="current != 1"
    >
      <Icon type="arrowUp" />
    </div>
    <div
      class="arrowDown"
      @click="changeImg($event, current + 1)"
      v-show="current != imgList.length"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="cbtn">
      <li
        :class="{ active: item.id == current }"
        v-for="item in imgList"
        :key="item.id"
        @click="changeImg($event, item.id)"
      ></li>
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
      imgList: [],
      current: 1, // 当前图片
      changeWheel: false,
      imgHeight: null,
      imgWidth: null,
      isLoading: true
    };
  },
  components: {
    ImageLoader,
    CarouselItem,
    Icon,
  },
  methods: {
    changeImg(e, index) {
      // console.log(e.deltaY);
      let i = this.current;
      if (index) {
        i = index;
      }
      if (e.deltaY) {
        if (this.changeWheel) {
          return;
        }
        if (e.deltaY > 50) {
          this.changeWheel = true;
          i++;
        } else if (e.deltaY < -50) {
          this.changeWheel = true;
          i--;
        }
        // console.log(i);
      }
      this.limiter(i);
      this.$refs.imgBox.style.marginTop =
        -this.imgHeight * (this.current - 1) + "px";
    },
    limiter(index) {
      if (index < 1) {
        index = 1;
      } else if (index > this.imgList.length) {
        index = this.imgList.length;
      }
      this.current = index;
    },
    changeTransitionEnd() {
      this.changeWheel = false;
    },
  },
  async created() {
    this.imgList = await banner();
    this.isLoading = !this.isLoading;
  },
  mounted() {
    this.imgHeight = this.$refs.imgBox.offsetHeight;
    this.imgWidth = this.$refs.imgBox.offsetWidth;
    let _this = this;
    window.addEventListener("resize", function () {
      _this.imgWidth = _this.$refs.imgBox.offsetWidth;
      _this.imgHeight = _this.$refs.imgBox.offsetHeight;
    });
  },
  destroyed() {
    window.removeEventListener("resize",null);
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-li {
  // background-color: @dark;
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;


  // width: 500px;
  // height: 300px;
  // border: 1px solid red;
  // margin: 100px 100px;
  // overflow: visible;
  .imgBox {
    width: 100%;
    height: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
    transition: 500ms;
    li {
      width: 100%;
      height: 100%;
    }
  }
  & > div {
    .self-center();
    cursor: pointer;
    color: gray;
    .icon-li {
      font-size: 32px;
    }
    &.arrowUp {
      top: 25px;
      animation: jump-up 2s ease-out infinite;
    }
    &.arrowDown {
      top: auto;
      bottom: 25px;
      animation: jump-down 2s ease-out infinite;
    }
  }
  .cbtn {
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translateY(-50%);
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      padding: 0;
      cursor: pointer;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: rgb(0, 0, 0);
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
      &.active {
        background-color: white;
      }
      box-sizing: border-box;
      border: 1px solid white;
    }
  }
}

@jump: 10px;
@keyframes jump-up {
  0% {
    transform: translate(-50%, -@jump);
  }
  50% {
    transform: translate(-50%, @jump);
  }
  100% {
    transform: translate(-50%, -@jump);
  }
}
@keyframes jump-down {
  0% {
    transform: translate(-50%, @jump);
  }
  50% {
    transform: translate(-50%, -@jump);
  }
  100% {
    transform: translate(-50%, @jump);
  }
}
</style>