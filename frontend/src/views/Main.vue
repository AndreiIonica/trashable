<template>
	<div id="main-container">
		<div id="mapid"></div>
		<Overlay
			id="overlay"
			@zoom-in="handleZoomIn"
			@zoom-out="handleZoomOut"
			@focus-map="handleFocus"
			@closest="handleClosest"
		/>
	</div>
</template>

<script lang="ts" setup>
import Overlay from '@/components/modules/map/Overlay.vue';
import userIconSVG from '@/assets/raw/UserIcon';
import { rawSVG as markerIconSvg } from '@/assets/raw/Marker';
import markerColors from '@/assets/raw/MarkerColors';

import { onMounted } from 'vue';
import 'leaflet/dist/leaflet.css';
import {
	Map,
	map as createMap,
	tileLayer,
	LatLngExpression,
	Marker as IMarker,
	marker as Marker,
	DivIcon as IDivIcon,
	divIcon as DivIcon,
} from 'leaflet';
import { Trashcan } from '@trashable/hydrogen';

let map: Map;
// Coords Pitesti
const STARTING_COORDS: LatLngExpression = [44.8478554, 24.8641281];

const UserIcon = DivIcon({
	className: 'user-icon-map',
	html: userIconSVG,
});

const MarkerIcons: IDivIcon[] = [];
markerColors.forEach(c => {
	MarkerIcons.push(
		DivIcon({
			className: 'mark',
			html: markerIconSvg.replace('#000000', c),
		}),
	);
});

const UserMarker = Marker(STARTING_COORDS, {
	icon: UserIcon,
});
const TrashcanMarkers: IMarker[] = [];

let Trashcans: Trashcan.Trashcan[];

Trashcan.GetAll()
	.then(t => {
		Trashcans = t;
		Trashcans.forEach(trashcan => {
			// Make new Marker
			const m = Marker([trashcan.latitude, trashcan.longitude], {
				icon: MarkerIcons[trashcan.type_id],
			});

			TrashcanMarkers.push(m);
			m.addTo(map);
		});
	})
	.catch(err => {
		console.error(err);
		// FIXME: find another way to error, for now will just alert
		// eslint-disable-next-line no-alert
		alert(
			'Momentan Trashable intampina probleme.Incercati mai tarziu sau contactati un administrator!',
		);
	});

// eslint-disable-next-line no-undef
function updateUserLocation(pos: GeolocationPosition): void {
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

function handleClosest(id: number | 'all') {
	console.log(id);
}

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
