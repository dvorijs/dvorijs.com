<template>
	<div class="grid grid-cols-3 gap-x-24 gap-y-3 justify-items-center w-full">
		<div class="col-span-3 h-auto text-center">
			<img src="/logos/dvori-logo@2x.png" class="logo h-autox block" />
			<NuxtLink
				to="/projects/dvori/docs/introduction"
				class="text-center inline-block w-fullx mt-6 px-6 py-3 bg-indigo-400 text-white text-xl rounded-xl"
				>Documentation</NuxtLink
			>
		</div>
		<div class="text-center">
			<IconsMap class="w-24 text-indigo-300 inline-block" />
			<h2 class="text-2xl my-2 font-semibold text-indigo-400">
				Composable
			</h2>
			<p>
				Functional composition allows you to write logic once, combine
				it as needed, and use it over and over again.
			</p>
		</div>
		<div class="text-center">
			<IconsHeart class="w-24 text-indigo-300 inline-block" />
			<h2 class="text-2xl my-2 font-semibold text-indigo-400">
				Powerful
			</h2>
			<p>
				Built in features like support for OAuth2, Pagination, and more
				make creating a custom HTTP clients easy.
			</p>
		</div>
		<div class="text-center">
			<IconsGithub class="w-24 text-indigo-300 inline-block" />
			<h2 class="text-2xl my-2 font-semibold text-indigo-400">
				Open Source
			</h2>
			<p>
				Powered by modern JavaScript, the source code can be found on
				<a
					href="https://github.com/dvorijs/dvori"
					class="font-semibold"
					title="Dvori on Github"
					target="_blank"
					>Github</a
				>
				and
				<a
					href="https://www.npmjs.com/package/dvori"
					class="font-semibold"
					title="Dvori on NPM"
					target="_blank"
					>NPM</a
				>
			</p>
		</div>
	</div>
</template>
<script>
export default {
	layout: "docs",
};
</script>
<style lang="postcss" scoped>
.logo {
	max-width: 400px;
}
</style>
