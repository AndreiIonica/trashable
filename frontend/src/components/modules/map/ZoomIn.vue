<template>
	<button>
		+
	</button>
</template>

<script lang="ts" setup></script>

<style scoped>
button {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	width: 2em;
	height: 2em;
	font-size: 1.2em;

	background: var(--accent-color);
	color: var(--text-color);

	border: 0;
	border-radius: 50%;
}
</style>
