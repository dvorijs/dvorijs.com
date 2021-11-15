<template>
	<div class="hidden lg:block col-span-1 justify-self-center sticky top-0">
		<h5
			class="text-base font-bold text-gray-500 my-3"
			:class="{ uppercase: uppercase }"
		>
			<IconsHamburger class="inline w-5 h-5" /> {{ title }}
		</h5>
		<ul class="text-base font-semibold ml-1">
			<slot></slot>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "Table of Contents",
		},
		uppercase: {
			type: Boolean,
			default: true,
		},
	},
};
</script>
