<template>
	<div id="container">
		TRASHABLE
		<MenuIcon id="icon" />
	</div>
</template>

<script lang="ts" setup>
import MenuIcon from '@/components/icons/HamburgerMenu.vue';
</script>

<style scoped>
#container {
	height: 3rem;
	font-size: 1.2em;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	padding: 1rem 2rem;

	background: var(--accent-color);
	color: var(--text-color);

	border-radius: 4em;
	border: 0;
}

#icon {
	height: 100%;
}
</style>
