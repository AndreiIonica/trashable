<template>
	<div class="container">
		TRASHABLE
		<div class="icon">
			<MenuIcon />
		</div>
	</div>
</template>

<script lang="ts" setup>
import MenuIcon from '@/components/icons/HamburgerMenu.vue';
</script>

<style scoped>
.container {
	font-size: 1.2rem;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	padding: 1rem 2rem;

	background: var(--accent-color);
	color: var(--text-color);

	border-radius: 4rem;
	border: 0;
}

.icon {
	height: 100%;
}
</style>
