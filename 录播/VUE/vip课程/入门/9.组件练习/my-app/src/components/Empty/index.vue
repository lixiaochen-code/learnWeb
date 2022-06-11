<template>
	<div class="empty-li">
		<Icon type="empty" />
		<p>{{ text }}</p>
	</div>
</template>

<script>
	import Icon from "../Icon";
	export default {
		props: {
			text: {
				type: String,
				default: "无数据"
			},
		},
		components: {
			Icon
		}
	}
</script>

<style>
	.empty-li {
		width: 500px;
		height: 500px;
		display: flex;
		
	}
</style>
