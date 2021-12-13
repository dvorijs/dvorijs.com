<template>
	<div class="w-full">
		<div class="flex w-full min-h-18 mb-12">
			<div class="w-48 flex-none">
				<img src="/logos/dvori-logo.png" class="max-h-16" alt="Dvori" />
			</div>
			<div
				class="flex-auto border-b border-gray-200 h-18 flex items-center justify-between px-4 ml-4"
			>
				search bar
			</div>
		</div>

		<div class="flex w-full">
			<aside class="flex-none w-48 h-full">
				<ul class="text-base font-semibold">
					<li class="">
						Getting started
						<ul
							class="my-2 text-base font-semibold ml-3 text-gray-500"
						>
							<li>
								<NuxtLink
									to="/docs/introduction"
									class="inline-block mb-1 text-sm font-semibold"
									>Introduction</NuxtLink
								>
							</li>
							<li>
								<NuxtLink
									to="/docs/installation"
									class="inline-block mb-1 text-sm font-semibold"
									>Installation</NuxtLink
								>
							</li>
							<li>
								<NuxtLink
									to="/docs/basic-usage"
									class="inline-block mb-1 text-sm font-semibold"
									>Basic Usage</NuxtLink
								>
							</li>
						</ul>
					</li>
					<li>
						<NuxtLink
							to="/docs/plugins"
							class="inline-block my-1 text-base font-semibold"
							>Plugins</NuxtLink
						>
					</li>
					<li>
						<NuxtLink
							to="/docs/middleware"
							class="inline-block my-1 text-base font-semibold"
							>Middleware</NuxtLink
						>
					</li>
					<li class="">
						Examples
						<ul
							class="my-2 text-base font-semibold ml-3 text-gray-500"
						>
							<li>
								<NuxtLink
									to="/docs/reddit-example"
									class="inline-block mb-1 text-sm font-semibold"
									>Reddit</NuxtLink
								>
							</li>
						</ul>
					</li>
				</ul>
			</aside>
			<div class="flex w-full">
				<div class="min-w-0 flex-auto px-4 pb-20">
					<NuxtContent
						class="w-max-full prose prose-sm sm:prose lg:prose-lg xl:prose-2xlx mx-autox"
						:document="page"
					/>
				</div>
				<div class="flex-none">
					<TableOfContents title="On this page">
						<template v-for="link of page.toc">
							<TableOfContentsLink
								:to="`#${link.id}`"
								:key="link.id"
								:class="{
									'ml-3': link.depth === 3,
									'ml-4': link.depth === 4,
								}"
							>
								{{ link.text }}
							</TableOfContentsLink>
						</template>
					</TableOfContents>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	layout: "docs",
	async asyncData({ $content, params }) {
		const page = await $content("docs", params.slug).fetch();

		return { page };
	},
};
</script>
