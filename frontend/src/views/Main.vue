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

// Import leaflet css,won't work without it
import 'leaflet/dist/leaflet.css';

// Library imports
import { onMounted } from 'vue';
import { map as createMap, tileLayer, marker as Marker } from 'leaflet';
import { Trashcan } from '@trashable/hydrogen';

// Interfaces
import type { LatLngExpression, Marker as IMarker, Map as IMap } from 'leaflet';

// Leaflet helpers
import MarkerIcons from '@/assets/leaflet/MarkerIcons';
import UserIcon from '@/assets/leaflet/UserIcon';
import Line from '@/util/leaflet/Line';

// Coords Pitesti
const STARTING_COORDS: LatLngExpression = [44.8478554, 24.8641281];

let map: IMap;

let mainLine: Line;

const UserMarker = Marker(STARTING_COORDS, {
	icon: UserIcon,
});

const TrashcanMarkers: IMarker[] = [];

let Trashcans: Trashcan.Trashcan[];

// Fetch all trashcans asynchronously
// Not using await because it will stop execution until fetch is done
Trashcan.GetAll()
	.then((t) => {
		Trashcans = t;
		Trashcans.forEach((trashcan) => {
			// Make new Marker
			const m = Marker([trashcan.latitude, trashcan.longitude], {
				icon: MarkerIcons[trashcan.type_id],
			});

			TrashcanMarkers.push(m);
			m.addTo(map);
		});
	})
	.catch((err) => {
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
	mainLine = new Line(map, '#60ad5e');
});

function handleClosest(id: number | 'all') {
	console.log(id);
	if (id === 'all') {
		const userCoords = UserMarker.getLatLng();
		let markerCoords = UserMarker.getLatLng();

		let minDistance = -1;

		TrashcanMarkers.forEach((t) => {
			const dist = map.distance(t.getLatLng(), userCoords);

			if (minDistance === -1) {
				minDistance = dist;
				markerCoords = t.getLatLng();
			} else if (dist < minDistance) {
				minDistance = Math.min(minDistance, dist);
				markerCoords = t.getLatLng();
			}
		});
		mainLine.setCoords(userCoords, markerCoords);

		map.flyToBounds(mainLine.getBounds());
	}
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
