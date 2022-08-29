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
			}
		},
		components: {
			Icon
		}
	}
</script>

<style scoped lang="less">
	@import url("~@/styles/var.less");
	@import url("~@/styles/mixin.less");

	.empty-li {
		.self-center();
		text-align: center;
		color: @lightWords;
		.icon-li {
			font-size: 50px;
		}
	}
</style>