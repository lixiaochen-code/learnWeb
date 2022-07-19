<template>
  <div
    class="carouselitem-li"
    @mousemove="moveImg($event)"
    @mouseleave="leaveImg"
  >
    <div class="img" ref="imgBox">
      <ImageLoader
        :src="obj.bigImg"
        :placeholder="obj.midImg"
        @load="loadImg"
        :style="{
          transform: `scale(${scale}) translate(${disX}px, ${disY}px)`,
          transition: 'all 100ms linear',
        }"
      />
    </div>
    <div class="text">
      <h1>{{ obj.title }}</h1>
      <h3>{{ obj.description }}</h3>
    </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: {
    obj: {
      type: Object,
      required: true,
    },
    scale: {
      type: Number,
      default: 1.1,
    },
    imgWitdh: {
      type: Number,
      required: true,
    },
    imgHeight: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      disX: 0,
      disY: 0,
    };
  },
  methods: {
    leaveImg() {
      this.disX = 0;
      this.disY = 0;
    },
    // layerX:鼠标相比较于当前坐标系的位置,即如果触发元素没有设置绝对定位或相对定位,以页面为参考点,如果有,将改变参考坐标系,从触发元素盒子模型的border区域的左上角为参考点
    // 也就是当触发元素设置了相对或者绝对定位后。
    moveImg(e) {
      // console.log(e.pageX)
      if (e.pageX - 250 < this.$refs.imgBox.offsetWidth / 2) {
        if (e.pageY < this.$refs.imgBox.offsetHeight / 2) {
          this.disX =
            ((this.$refs.imgBox.offsetWidth - this.imgWitdh * this.scale) /
              2 /
              this.$refs.imgBox.offsetWidth /
              2) *
            (e.pageX - 250);
          this.disY =
            ((this.$refs.imgBox.offsetHeight - this.imgHeight * this.scale) /
              2 /
              this.$refs.imgBox.offsetHeight /
              2) *
            e.pageY;
        } else {
          this.disX =
            ((this.$refs.imgBox.offsetWidth - this.imgWitdh * this.scale) /
              2 /
              this.$refs.imgBox.offsetWidth /
              2) *
            (e.pageX - 250);
          this.disY =
            ((this.$refs.imgBox.offsetHeight - this.imgHeight * this.scale) /
              2 /
              this.$refs.imgBox.offsetHeight /
              2) *
            e.pageY;
        }
      } else {
        if (e.pageY < this.$refs.imgBox.offsetHeight / 2) {
          this.disX =
            ((this.$refs.imgBox.offsetWidth - this.imgWitdh * this.scale) /
              2 /
              this.$refs.imgBox.offsetWidth /
              2) *
            (e.pageX - 250);
          this.disY =
            ((this.$refs.imgBox.offsetHeight - this.imgHeight * this.scale) /
              2 /
              this.$refs.imgBox.offsetHeight /
              2) *
            e.pageY;
        } else {
          this.disX =
            ((this.$refs.imgBox.offsetWidth - this.imgWitdh * this.scale) /
              2 /
              this.$refs.imgBox.offsetWidth /
              2) *
            (e.pageX - 250);
          this.disY =
            ((this.$refs.imgBox.offsetHeight - this.imgHeight * this.scale) /
              2 /
              this.$refs.imgBox.offsetHeight /
              2) *
            e.pageY;
        }
      }
    },
    loadImg(ele) {
      console.log("图片加载完成！！！");
    },
  },
  components: {
    ImageLoader,
  },
  computed: {},
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.carouselitem-li {
  width: 100%;
  height: 100%;
  position: relative;
  .img {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .text {
    .self-center();
    color: white;
    transform: translate(0, -50%);
    left: 25px;
    letter-spacing: 4px;
    h1 {
      font-weight: 400;
    }
    h3 {
      font-weight: 400;
    }
  }
}
</style>