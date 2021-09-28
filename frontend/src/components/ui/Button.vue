<template>
	<button>
		<span>
			<slot></slot>
		</span>
	</button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const sizeNames = {
	large: {
		padding: '1rem 2rem',
		textSize: '1.2rem',
	},
	normal: {
		padding: '0.5rem 1rem',
		textSize: '1rem',
	},
	small: {
		padding: '0.25rem 0.5rem',
		textSize: '0.75rem',
	},
};

interface IButtonProps {
	size?: keyof typeof sizeNames;
}

const props = defineProps<IButtonProps>();

const size = props.size ?? 'large';
</script>

<style scoped>
button {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	padding: v-bind('sizeNames[size].padding');

	background: var(--accent-color);
	color: var(--text-color);
	font-size: v-bind('sizeNames[size].textSize');

	border-radius: 4rem;
	border: 0;
}
</style>
