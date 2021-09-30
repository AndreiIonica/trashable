<template>
	<div class="overlay-container">
		<TopMenu id="top-menu" />

		<div class="controls-container">
			<div id="menus-container">
				<RecyclingCenter id="closest-button" />
				<Button id="closest-menu">IN APROPIERE</Button>
			</div>
			<div>
				<Focus class="control-map" />
				<ZoomIn class="control-map" />
				<ZoomOut class="control-map" />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import TopMenu from './TopMenu.vue';
import Focus from './Focus.vue';
import ZoomIn from './ZoomIn.vue';
import ZoomOut from './ZoomOut.vue';
import RecyclingCenter from './RecyclingCenter.vue';
import Button from '@/components/ui/Button.vue';
</script>

<style scoped>
#top-menu {
	margin: 1%;
	height: 10%;
	max-height: 2.5rem;
	letter-spacing: 0.2em;
}
#closest-menu,
#closest-button {
	margin: 2%;
}
#closest-menu {
	font-size: 1rem;
	max-width: 15rem;
}

#menus-container {
	display: flex;
	flex-direction: column;
	justify-content: end;
}
.control-map {
	margin: 2%;
	height: 3rem;
	margin-left: auto;
	width: 3rem;
	/* max-height: 3rem; */
}

.controls-container {
	display: grid;
	width: 100%;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
}
.overlay-container {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
</style>
