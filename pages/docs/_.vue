<template>
	<div>test</div>
</template>
<script>
export default {
	layout: "docs",
	async asyncData({ $content, params }) {
		console.log("params");
		console.log(params.pathMatch);
		// console.log("this.$route.path");
		// console.log(this.$route.path);
	},
};
</script>
