<template>
	<div>
		<img id="background" src="~@/assets/raw/gradient.svg" />
		<div id="main-container">
			<div id="logo">
				<TrashableLogo></TrashableLogo>
			</div>
			<p id="title">TRASHABLE</p>
			<div>
				<Error404 class="error"></Error404>
				<Errorimg class="error"></Errorimg>
			</div>
			<Button size="normal" id="to-site">Catre site</Button>
			<ReturnButton></ReturnButton>
		</div>
	</div>
</template>
<script lang="ts" setup>
import Error404 from '@/components/icons/404error.vue';
import TrashableLogo from '@/components/icons/TrashableLogo.vue';
import Errorimg from '@/components/icons/404img.vue';
import Button from '@/components/ui/Button.vue';
import ReturnButton from '@/components/ui/ReturnButton.vue';
</script>
<style scoped>
#main-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
#background {
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: -1;
}
#logo {
	width: 25%;
	margin: 5%;
	margin-bottom: 0%;
}
#title {
	margin-top: 0%;
	margin-bottom: 6%;
	color: var(--text-color);
	font-size: 2rem;
	letter-spacing: 0.12em;
}
#to-site {
	height: 2.4rem;
	width: 38%;
	margin-top: 8%;
	margin-bottom: 8%;
}
.error {
	margin: 5%;
}
</style>
