<template>
	<div class="imageloader-li">
		<img class="img" :src="src" alt="" ref="img" @load="imgLoader" >
		<img class="placeholder" ref="placeholder" :src="placeholder" alt="" :style="{
			opacity: opacityLoad,
			transition: `${durantion}ms`
		}" v-if="everything" >
	</div>
</template>

<script>
	export default {
		// 向父组件抛出一个load事件
		props: {
			// 原图
			src:{
				type:String,
				required:true
			},
			// 占位图
			placeholder:{
				type:String,
				required:true
			},
			// 加载事件
			durantion:{
				type:Number,
				default:500
			}
		},
		computed:{
			opacityLoad() {
				return this.originLoad ? 0 : 1;
			}
		},
		data(){
			return {
				originLoad: false,
				everything: true
			}
		},
		methods:{
			imgLoader(){
				// 自己做的	开始做方法二	绑定数据 v-bind
				// clearTimeout(this.timer);
				// this.timer = setTimeout(()=>{
				// 	// this.$refs.placeholder.style.filter = "0px";
				// 	// this.$refs.placeholder.style.opacity = "0";
				// 	// this.$refs.placeholder.style.transition = "all .3s";		
					
				// 	this.$emit("load", this.$refs.placeholder);
				// },this.durantion);
				this.originLoad = true;
				setTimeout(()=>{
					this.everything = false
				},this.durantion)
				this.$emit("load", this.$refs.placeholder);
			}
		}
	}
</script>

<style scoped lang="less">
@import url("../../styles/mixin.less");
	.imageloader-li {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
		img {
			&.placeholder {
				filter: blur(5px)
			}
			.self-fill();
			object-fit: cover;
		}
	}

</style>