<template>
	<a :href="props.redirect" id="container">
		<div id="icon">
			<DiscordLogo />
		</div>
		Sign in with Discord
	</a>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

// Somehow applying styles directly to this component doesn't work,so it's wrapped in a div
import DiscordLogo from '@/components/icons/DiscordLogo.vue';

interface IDiscordProps {
	redirect?: string;
}
const props = defineProps<IDiscordProps>();
</script>

<style scoped>
#container {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;

	padding: 0.25rem 0.5rem;

	background: #5865f2;
	color: var(--text-color);
	text-decoration: none;

	border-radius: 4rem;
	border: 0;
}

#icon {
	height: 85%;
}
</style>
