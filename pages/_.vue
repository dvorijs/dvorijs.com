<template>
	<div class="w-full">
		<div class="flex w-full min-h-18 mb-12">
			<div class="w-48 flex-none">
				<NuxtLink to="/">
					<img
						src="/logos/dvori-logo.png"
						class="max-h-16"
						alt="Dvori"
					/>
				</NuxtLink>
			</div>
			<div
				class="flex-auto border-bx border-gray-200x h-18 flex items-center justify-between px-4 ml-4"
			></div>
			<div class="flex flex-none justify-endx items-center">
				<a
					href="https://github.com/dvorijs/dvori"
					title="Dvori on Github"
					target="_blank"
				>
					<IconsGithub class="w-8 h-8 fill-current text-gray-200" />
				</a>
			</div>
		</div>

		<div class="flex w-full">
			<aside class="flex-none w-48 h-full">
				<ul class="text-base font-semibold">
					<li>
						Getting started
						<ul
							class="my-2 text-base font-semibold ml-3 text-gray-500"
						>
							<li>
								<NuxtLink
									to="/introduction"
									class="inline-block mb-1 text-sm font-semibold"
									>Introduction</NuxtLink
								>
							</li>
							<li>
								<NuxtLink
									to="/installation"
									class="inline-block mb-1 text-sm font-semibold"
									>Installation</NuxtLink
								>
							</li>
							<li>
								<NuxtLink
									to="/basic-usage"
									class="inline-block mb-1 text-sm font-semibold"
									>Basic Usage</NuxtLink
								>
							</li>
						</ul>
					</li>

					<li>
						Packages
						<ul
							class="my-2 text-base font-semibold ml-3 text-gray-500"
						>
							<li>
								<NuxtLink
									to="/packages/core"
									class="inline-block mb-1 text-sm font-semibold"
									>Core</NuxtLink
								>
							</li>
							<li>
								<NuxtLink
									to="/packages/plugins"
									class="inline-block mb-1 text-sm font-semibold"
									>Plugins</NuxtLink
								>
							</li>
							<li>
								<NuxtLink
									to="/packages/core"
									class="inline-block mb-1 text-sm font-semibold"
									>Retry</NuxtLink
								>
							</li>
							<li>
								<NuxtLink
									to="/packages/core"
									class="inline-block mb-1 text-sm font-semibold"
									>Pagination
								</NuxtLink>
							</li>
							<li>
								<NuxtLink
									to="/packages/core"
									class="inline-block mb-1 text-sm font-semibold"
									>OAuth2</NuxtLink
								>
							</li>
						</ul>
					</li>

					<li>
						<NuxtLink
							to="/plugins"
							class="inline-block my-1 text-base font-semibold"
							>Plugins</NuxtLink
						>
					</li>
					<li>
						<NuxtLink
							to="/middleware"
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
									to="/examples/reddit"
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
	async asyncData({ $content, params, route, error }) {
		try {
			const path = `/${params.pathMatch || "index"}`;
			const [page] = await $content({ deep: true })
				.where({ path: path })
				.fetch()
				.catch((err) => {
					error({ statusCode: 404, message: "Page not found" });
				});

			if (!page) {
				error({ statusCode: 404, message: "Page not found" });
			}

			return { page };
		} catch (e) {
			error({ statusCode: 500, message: "Internal Error" });
		}
	},
};
</script>
