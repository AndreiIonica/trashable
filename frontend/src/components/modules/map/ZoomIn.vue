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

	width: 2rem;
	height: 2rem;
	font-size: 1.2rem;

	background: var(--accent-color);
	color: var(--text-color);

	border: 0;
	border-radius: 50%;
}
</style>
