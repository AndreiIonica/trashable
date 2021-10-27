<template>
	<div class="overlay-container">
		<TopMenu id="top-menu" class="clickable" />

		<div v-if="menuActive" class="clickable">
			<ClosestMenu
				:pins="ClosestMenuProps.pins"
				:recycling-center="ClosestMenuProps.recyclingCenter"
				@back="toggleMenu"
				@closest="id => emit('closest', id)"
			/>
		</div>
		<div v-else class="controls-container clickable">
			<div id="menus-container">
				<RecyclingCenter id="closest-button" class="clickable" @click="emit('closest', 'all')" />
				<Button id="closest-menu" @click="toggleMenu">IN APROPIERE</Button>
			</div>
			<div>
				<Focus class="control-map clickable" @click="emit('focusMap')" />
				<ZoomIn class="control-map clickable" @click="emit('zoomIn')" />
				<ZoomOut class="control-map clickable" @click="emit('zoomOut')" />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { defineEmits, ref } from 'vue';

import markerColors from '@/assets/raw/MarkerColors';

import TopMenu from './TopMenu.vue';
import ClosestMenu from './ClosestMenu.vue';
import Focus from './Focus.vue';
import ZoomIn from './ZoomIn.vue';
import ZoomOut from './ZoomOut.vue';
import RecyclingCenter from './RecyclingCenter.vue';
import Button from '@/components/ui/Button.vue';

interface IOverlayEmits {
	(e: 'zoomIn'): void;
	(e: 'zoomOut'): void;
	(e: 'focusMap'): void;
	(e: 'closest', id: number | 'all'): void;
}

const emit = defineEmits<IOverlayEmits>();

const menuActive = ref(false);

function toggleMenu() {
	menuActive.value = !menuActive.value;
}

// TODO: compute distances
const ClosestMenuProps = {
	pins: markerColors.map(c => ({ markerColor: c, distance: '. . . m' })),
	recyclingCenter: {
		markerColor: '#FFFFFF',
		distance: '. . . m',
	},
};
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
