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
		padding: '1em 2em',
		textSize: '1.2em',
	},
	normal: {
		padding: '0.5em 1em',
		textSize: '1em',
	},
	small: {
		padding: '0.25em 0.5em',
		textSize: '0.75em',
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
	justify-content: space-evenly;
	align-items: center;

	padding: v-bind('sizeNames[size].padding');

	background: var(--accent-color);
	color: var(--text-color);
	font-size: v-bind('sizeNames[size].textSize');

	border-radius: 4em;
	border: 0;
}
</style>
