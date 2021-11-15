<template>
	<li>
		<NuxtLink :to="to" class="text-sm font-semibold">
			<slot></slot>
		</NuxtLink>
	</li>
</template>

<script>
export default {
	props: {
		to: {
			type: String,
			required: true,
		},
	},
};
</script>
