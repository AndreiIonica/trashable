<template>
	<button id="container">
		<div id="icon">
			<GoogleLogo />
		</div>
		Sign in with Google
	</button>
</template>

<script lang="ts" setup>
// Somehow applying styles directly to this component doesn't work,so it's wrapped in a div
import GoogleLogo from '@/components/icons/GoogleLogo.vue';
</script>

<style scoped>
#container {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;

	padding: 0.25rem 0.5rem;

	background: #ffffff;
	color: var(--secondary-text);

	border-radius: 4rem;
	border: 0;
}

#icon {
	height: 80%;
}
</style>
