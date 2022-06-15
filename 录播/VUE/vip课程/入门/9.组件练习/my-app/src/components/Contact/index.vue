<template>
	<div class="contact-li">
		<div class="connect">
			<Icon :type="type" />
			<a :href="url">{{ text }}</a>
		</div>
		<div class="QRCode">
			<img :src="imgUrl" alt="">
		</div>
	</div>
</template>

<script>
	import Icon from "../Icon";
	export default {
		props:{
			type : {
				type :String,
				default: "weixin"
			},
			text:{
				type: String,
				default: "wx115255"
			},
			imgUrl:{
				type: String
			},
			url:{
				typr: String
			}
		},
		components:{
			Icon
		}
	}
</script>

<style>
	.contact-li {
	}
</style>