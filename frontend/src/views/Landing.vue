<template>
	<div id="main-container">
		<img id="background" src="~@/assets/raw/gradient.svg" />
		<div class="logo">
			<TrashableLogo></TrashableLogo>
		</div>
		<p id="title">TRASHABLE</p>
		<Button size="small" id="start" @click="goToMainScreen">START</Button>
		<Button size="normal" id="to-site" @click="goToHomeSite">Catre site</Button>
	</div>
</template>
<script lang="ts" setup>
import Button from '@/components/ui/Button.vue';
import TrashableLogo from '@/components/icons/TrashableLogo.vue';

import { useRouter } from 'vue-router';

const router = useRouter();

function goToMainScreen() {
	router.push('/main');
}

function goToHomeSite() {
	window.location.href = 'https://trashable.giveitback.ro/';

	// Possible macos fix
	// eslint-disable-next-line no-restricted-globals
	location.href = 'https://trashable.giveitback.ro/';
}
</script>
<style scoped>
#background {
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: -1;
}

#main-container {
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
}
#to-site {
	height: 2.4rem;
	width: 38%;
	max-width: 12rem;
}
#start {
	max-width: 12rem;
	width: 38%;
	font-size: 2rem;
	letter-spacing: 0.12rem;
}
#title {
	color: var(--text-color);
	font-size: 2rem;
	letter-spacing: 0.12em;
}
.logo {
	width: 25%;
	max-height: 8rem;
}
</style>
