<template>
	<div>
		<div class="container mx-auto px-12 md:px-16">
			<Nuxt />
		</div>

		<footer
			class="fixed bottom-0 text-sm grid grid-cols-2 w-full px-4 md:px-6 lg:px-8 bg-white border-t border-gray-100 items-center py-2 md:py-4"
		>
			<div class="flex col-span-1"></div>
			<div class="flex col-span-1 justify-end">
				Made by
				<a
					href="https://imns.co"
					class="ml-1"
					title="IMNS"
					target="_blank"
					>IMNS</a
				>
			</div>
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
