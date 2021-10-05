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

	width: 4rem;
	height: 4rem;
	padding: 0.6rem;

	background: var(--accent-color);

	border: 0;
	border-radius: 50%;
}
</style>
