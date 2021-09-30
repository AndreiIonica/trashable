<template>
	<div class="overlay-container">
		<TopMenu id="top-menu" class="clickable" />

		<div class="controls-container clickable">
			<div id="menus-container">
				<RecyclingCenter id="closest-button" class="clickable" />
				<Button id="closest-menu" class="">IN APROPIERE</Button>
			</div>
			<div>
				<Focus class="control-map clickable" />
				<ZoomIn class="control-map clickable" />
				<ZoomOut class="control-map clickable" />
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
	justify-content: flex-end;
}
.clickable {
	pointer-events: auto;
}
.control-map {
	margin: 2%;
	height: 3rem;
	margin-left: auto;
	width: 3rem;
}

.controls-container {
	display: grid;
	width: 100%;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
}
.overlay-container {
	pointer-events: none;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
</style>
