<template>
	<div>
		<div class="min-h-screen p-2 md:p-4 lg:px-6 lg:py-4">
			<Nuxt />
		</div>

		<footer
			class="fixed bottom-0 text-sm grid grid-cols-2 w-full px-4 md:px-6 lg:px-8 bg-white border-t border-gray-100 items-center"
		>
			<div class="flex col-span-1">asdf</div>
			<div class="flex col-span-1 justify-end">asdf</div>
		</footer>
	</div>
</template>

<script>
export default {
	head() {
		return {
			link: [
				{
					rel: "canonical",
					href: "https://dvorijs.com" + this.$route.path,
				},
			],
		};
	},
};
</script>
<style lang="postcss">
.icon-bg {
}
</style>
