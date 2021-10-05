<template>
	<div id="main-container">
		<div id="mapid"></div>
		<Overlay
			id="overlay"
			@zoom-in="handleZoomIn"
			@zoom-out="handleZoomOut"
			@focus-map="handleFocus"
		/>
	</div>
</template>

<script lang="ts" setup>
import Overlay from '@/components/modules/map/Overlay.vue';

import { onMounted } from 'vue';
import 'leaflet/dist/leaflet.css';
import {
	Map,
	map as createMap,
	tileLayer,
	LatLngExpression,
	marker as Marker,
	divIcon as DivIcon,
} from 'leaflet';

import userIconSvg from '@/assets/raw/UserIcon';

// Coords Pitesti
const STARTING_COORDS: LatLngExpression = [44.8478554, 24.8641281];

let map: Map;

const UserIcon = DivIcon({
	className: 'user-icon-map',
	html: userIconSvg,
});

const UserMarker = Marker(STARTING_COORDS, {
	icon: UserIcon,
});

// eslint-disable-next-line no-undef
function updateUserLocation(pos: GeolocationPosition): void {
	console.log(pos);
	UserMarker.setLatLng([pos.coords.latitude, pos.coords.longitude]);

	UserMarker.addTo(map);
}

if (navigator.geolocation) navigator.geolocation.watchPosition(updateUserLocation);

onMounted(() => {
	map = createMap('mapid', {
		zoomControl: false,
		attributionControl: false,
	}).setView(STARTING_COORDS, 13);
	tileLayer(
		'https://api.mapbox.com/styles/v1/trashable/cku74yqsr47gh18p3lghm3n69/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoidHJhc2hhYmxlIiwiYSI6ImNrcjdvM2V6bjNxbWQzMXFwc2lsYjRkY3UifQ.LPWo7d8sFng4vCAzoWHjNA ',
	).addTo(map);
	UserMarker.addTo(map);
});

function handleZoomIn() {
	map.zoomIn();
}
function handleZoomOut() {
	map.zoomOut();
}
function handleFocus() {
	const { lat, lng } = UserMarker.getLatLng();
	map.flyTo([lat, lng], 18);
}
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
