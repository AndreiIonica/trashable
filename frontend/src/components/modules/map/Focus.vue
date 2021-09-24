<template>
	<button>
		<FocusIcon />
	</button>
</template>

<script lang="ts" setup>
import FocusIcon from '@/components/icons/FocusIcon.vue';
</script>

<style scoped>
button {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	/* Weird values,i dont know why
	but this way it's the same size as the other buttons */
	width: 2.88em;
	height: 2.88em;

	background: var(--accent-color);

	border: 0;
	border-radius: 50%;
}
</style>
