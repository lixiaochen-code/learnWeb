<template>
    <div class="carouselitem-li">
        <ImageLoader :src="obj.bigImg" :placeholder="obj.midImg" />
    </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader"
export default {
    props: {
        obj:{
            type:Object,
            required:true
        }
    },
    components: {
        ImageLoader
    }
}
</script>

<style lang="less" scoped>
    .carouselitem-li {
        color: aliceblue;
        width: 100%;
        height: 100%;
    }
</style>