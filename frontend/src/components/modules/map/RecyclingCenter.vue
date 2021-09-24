<template>
	<button>
		<RecyclingIcon />
	</button>
</template>

<script lang="ts" setup>
import RecyclingIcon from '@/components/icons/RecyclingIcon.vue';
</script>

<style scoped>
button {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	width: 4em;
	height: 4em;
	padding: 0.6em;

	background: var(--accent-color);

	border: 0;
	border-radius: 50%;
}
</style>
