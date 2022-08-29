<template>
	<div id="app">
		<div>{{ aaa }}</div>
		<Avatar />
	</div>
</template>

<script>
	import Avatar from "./index.vue"
	export default {
		components:{
			Avatar
		},
		computed:{
			aaa(){
				console.log("Aaaaaaaaaaaaaaa运行了");
				return 1;
			}
		}
	}
</script>

<style>
</style>