<template>
  <div class="home-li" v-if="imgData.length > 0">
    <ul>
      <li v-for="item in imgData" :key="item.id">
        <!-- <ImageLoader :placeholder="item.midImg" :src="item.bigImg" /> -->
        <img :src="item.midImg" alt="">
        <p>{{item.description}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
import banner from "@/api/banner";
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
  },
};
</script>

<style scoped lang="less">
.home-li {
  width: 100%;
  // ul {
  //   width: 100%;

  //   height: 100%;
  //   li {
  //     width: 100%;
  //     height: 100%;
  //     .imageloader-li {
  //       width: 100%;
  //       height: 100%;
  //     }
  //   }
  // }
}
</style>