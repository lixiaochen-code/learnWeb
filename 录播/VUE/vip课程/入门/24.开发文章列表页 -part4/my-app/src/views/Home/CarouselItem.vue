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
    <!-- 方法一 在图片没有加载完成的时候就开始出现过渡动画 -->
    <!-- <div class="title" ref="title" :style="{
      width: titleWidth ? `${titleWidth}px` : null
    }" @transitionend="changeContentWidth">
      {{ obj.title }}
    </div> -->
    <!-- 方法二 在图片出现之后出现过渡动画 -->
    <div class="title" ref="title">
      {{ obj.title }}
    </div>
    <div class="contentText" ref="contentText">
      {{ obj.description }}
    </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: {
    // 图片数据
    obj: {
      type: Object,
      required: true,
    },
    // 缩放倍数
    scale: {
      type: Number,
      default: 1.1,
    },
    // 图片宽度
    imgWidth: {
      type: Number,
      required: true,
    },
    // 图片高度
    imgHeight: {
      type: Number,
      required: true,
    },
  },
  data() {
    // 需要移动的 translate 值
    return {
      disX: 0,
      disY: 0,
      titleWidth: 0,
      contentTextWidth: 0,
    };
  },
  mounted() {
    this.titleWidth = this.$refs.title.offsetWidth;
    this.contentTextWidth = this.$refs.contentText.offsetWidth;
    this.$refs.title.style.cssText = "width:0px; opacity:1";
    this.$refs.contentText.style.cssText = "width:0px; opacity:1";
  },
  methods: {
    // 鼠标移出Home图片区域 将img恢复原位
    leaveImg() {
      this.disX = 0;
      this.disY = 0;
    },
    // layerX:鼠标相比较于当前坐标系的位置,即如果触发元素没有设置绝对定位或相对定位,以页面为参考点,如果有,将改变参考坐标系,从触发元素盒子模型的border区域的左上角为参考点
    // 也就是当触发元素设置了相对或者绝对定位后。
    // 改变img位置 实现效果 鼠标移到哪里图片就显示哪里 图片本身比可视区大 且居中 change Img Positon
    /**
     * 把屏幕可视区分为四个区域 左上 右上 左下 右下 imgWidth/2 imgHeight/2
     * 大于 imgWidth/2 且 大于 imgHeight/2
     * 大于 imgWidth/2 且 小于 imgHeight/2
     * 小于 imgWidth/2 且 大于 imgHeight/2
     * 小于 imgWidth/2 且 小于 imgHeight/2
     */
    moveImg(e) {
      // 鼠标在当前元素的 X 坐标
      var mouseX = e.pageX - this.left,
        mouseY = e.pageY,
        scaleWidth = this.scale * this.imgWidth,
        scaleHeight = this.scale * this.imgHeight;
      // console.log(mouseX, mouseY, this.imgWidth, scaleWidth, this.imgHeight, scaleHeight);
      if (mouseX < this.imgWidth / 2) {
        if (mouseY < this.imgHeight / 2) {
          this.disX = ((this.scale - 1) / 2) * (-mouseX + this.imgWidth / 2);
          this.disY = ((this.scale - 1) / 2) * (-mouseY + this.imgHeight / 2);
        } else {
          this.disX = ((this.scale - 1) / 2) * (-mouseX + this.imgWidth / 2);
          this.disY = ((this.scale - 1) / 2) * (-mouseY + this.imgHeight / 2);
        }
      } else {
        if (mouseY < this.imgHeight / 2) {
          this.disX = ((this.scale - 1) / 2) * (-mouseX + this.imgWidth / 2);
          this.disY = ((this.scale - 1) / 2) * (-mouseY + this.imgHeight / 2);
        } else {
          this.disX = ((this.scale - 1) / 2) * (-mouseX + this.imgWidth / 2);
          this.disY = ((this.scale - 1) / 2) * (-mouseY + this.imgHeight / 2);
        }
      }
    },

    // ImageLoader组件 图片加载完成 抛出事件
    loadImg(ele) {
      console.log("图片加载完成！！！");
      this.chnageTextBoxWidth();
    },
    // // 过渡结束之后执行该函数 功能 title 过渡结束 紧接着 content 开始过渡
    // changeContentWidth(){
    //   console.log(this.contentTextWidth)
    //   this.$refs.contentText.style.width = this.contentTextWidth + "px";
    // },
    chnageTextBoxWidth() {
      this.$refs.title.style.width = this.titleWidth + "px";
      this.$refs.title.style.transition = "width 2s";
      this.$refs.contentText.style.width = this.contentTextWidth + "px";
      this.$refs.contentText.style.transition = "width 2s 2s";
    },
  },
  components: {
    ImageLoader,
  },
  computed: {
    // 该元素距离屏幕可视区左边界位置
    left() {
      return this.$refs.imgBox.getBoundingClientRect().left;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import url("~@/styles/var.less");
.carouselitem-li {
  width: 100%;
  height: 100%;
  position: relative;
  .img {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .title,
  .contentText {
    position: absolute;
    left: 25px;
    color: white;
    letter-spacing: 3px;
    overflow: hidden;
    opacity: 0;
    white-space: nowrap;
  }
  .title {
    top: calc(50% - 30px);
    width: auto;
    font-weight: 400;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
      0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
    font-size: 2em;
  }
  .contentText {
    top: calc(50% + 30px);
    width: auto;
    font-size: 1.2em;
    font-weight: 400;
    color: lighten(@gray, 20%);
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
      0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
  }
}
</style>