<template>
	<button>
		<span>
			<slot></slot>
		</span>
	</button>
</template>

<script lang="ts" setup>
import { defineProps, toRefs } from 'vue';

const enum sizeNames {
	large,
	normal,
	small,
}

interface IButtonProps {
	size?: keyof typeof sizeNames;
}

const props = defineProps<IButtonProps>();
const { size } = toRefs(props);
console.log(size?.value);
</script>

<style scoped>
button {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;

	padding: 1rem 2rem;

	background: var(--accent-color);
	color: var(--text-color);
	border-radius: 4rem;
	border: 0;
}
</style>
