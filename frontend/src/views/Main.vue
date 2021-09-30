<template>
	<div id="main-container">
		<div id="mapid"></div>
		<Overlay id="overlay" />
	</div>
</template>

<script lang="ts" setup>
import Overlay from '@/components/modules/map/Overlay.vue';

import { onMounted } from 'vue';
import 'leaflet/dist/leaflet.css';
import { Map, map as createMap, tileLayer } from 'leaflet';

let map: Map;

function setupMap() {
	map = createMap('mapid', {
		zoomControl: false,
		maxZoom: 20,
		attributionControl: false,
	}).setView([0, 0], 9);
	tileLayer(
		'https://api.mapbox.com/styles/v1/trashable/cku74yqsr47gh18p3lghm3n69/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoidHJhc2hhYmxlIiwiYSI6ImNrcjdvM2V6bjNxbWQzMXFwc2lsYjRkY3UifQ.LPWo7d8sFng4vCAzoWHjNA ',
	).addTo(map);
}
onMounted(setupMap);
</script>

<style scoped>
#main-container {
	width: 100%;
	height: 100%;
	overflow: hidden;
}
#overlay {
	width: 100%;
	height: 100%;
	position: relative;
	top: -100%;
	z-index: 1001;
}

#mapid {
	height: 100%;
}
</style>
