<template>
	<div>
		<Pager :total="2361" @changeCurrent="changeCurrent" :current="current" />
	</div>
</template>

<script>
	import Pager from "./index.vue"
	export default {
		data () {
			return {
				current:1
			}
		},
		components:{
			Pager
		},
		methods: {
			changeCurrent(i){
				this.current = i;
			}
		}
	}
</script>

<style lang="less" scoped>
	#app {
		width: 100vw;
		height: 100vh;
		background: #ddd;
	}
</style>