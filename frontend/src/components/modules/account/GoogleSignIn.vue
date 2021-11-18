<template>
	<a :href="props.redirect" id="container">
		<div id="icon">
			<GoogleLogo />
		</div>
		Sign in with Google
	</a>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

// Somehow applying styles directly to this component doesn't work,so it's wrapped in a div
import GoogleLogo from '@/components/icons/GoogleLogo.vue';

interface IGoogleProps {
	redirect?: string;
}

const props = defineProps<IGoogleProps>();
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
	text-decoration: none;

	border-radius: 4rem;
	border: 0;
}

#icon {
	height: 80%;
}
</style>
