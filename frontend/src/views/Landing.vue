<template>
	<div id="main-container">
		<img id="background" src="~@/assets/raw/gradient.svg" />
		<div class="logo">
			<TrashableLogo></TrashableLogo>
		</div>
		<p id="title">TRASHABLE</p>
		<Button size="small" id="start">START</Button>
		<Button size="normal" id="to-site">Catre site</Button>
	</div>
</template>
<script lang="ts" setup>
import Button from '@/components/ui/Button.vue';
import TrashableLogo from '@/components/icons/TrashableLogo.vue';
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
	justify-content: center;
	align-items: center;
}
#to-site {
	height: 2.4rem;
	width: 38%;
	margin-top: 5%;
	margin-bottom: 2.5%;
}
#start {
	width: 38%;
	font-size: 2rem;
	letter-spacing: 0.12rem;
}
#title {
	margin: 2.5%;
	color: var(--text-color);
	font-size: 2rem;
	letter-spacing: 0.12em;
	margin-bottom: 45%;
}
.logo {
	width: 25%;
	margin: 5%;
}
</style>
