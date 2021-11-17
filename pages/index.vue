<template>
	<div class="grid grid-cols-3 gap-x-24 gap-y-3 w-full min-h-screen">
		<div class="col-span-3 m-auto mb-6 md:mb-auto text-center">
			<img
				src="/logos/dvori-logo@2x.png"
				class="logo h-auto w-full md:w-auto block md:px-0"
			/>
			<h1 class="text-xl md:text-2xl">
				Composable HTTP client for Node.js
			</h1>
			<NuxtLink
				to="/docs/introduction"
				class="text-center block md:inline-block md:w-auto mt-6 px-6 py-3 bg-indigo-400 text-white text-xl rounded-xl"
				>Documentation</NuxtLink
			>
		</div>
		<div
			class="col-span-3 md:col-span-1 mx-auto mb-3 md:mb-auto text-center"
		>
			<IconsMap
				class="w-8 md:w-14 lg:w-24 text-indigo-300 inline-block"
			/>
			<h2 class="text-2xl my-2 font-semibold text-indigo-500">
				Composable
			</h2>
			<p>
				Functional composition allows you to write logic once, combine
				it as needed, and use it over and over again.
			</p>
		</div>
		<div
			class="col-span-3 md:col-span-1 mx-auto mb-3 md:mb-auto text-center"
		>
			<IconsHeart
				class="w-8 md:w-14 lg:w-24 text-indigo-300 inline-block"
			/>
			<h2 class="text-2xl my-2 font-semibold text-indigo-400">
				Powerful
			</h2>
			<p>
				Built in features like support for OAuth2, Pagination, and more
				make creating a custom HTTP clients easy.
			</p>
		</div>
		<div class="col-span-3 md:col-span-1 mx-auto pb-20 md:pb-0 text-center">
			<IconsGithub
				class="w-8 md:w-14 lg:w-24 text-indigo-300 inline-block"
			/>
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
export default {};
</script>
<style lang="postcss" scoped>
.logo {
	max-width: 400px;
}
</style>
