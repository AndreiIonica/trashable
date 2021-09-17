// Because leaflet is loaded from a CDN and not from node_modules
// vue doesnt know about it and throws a fit
/* eslint-disable no-undef */
function createMap() {
	const map = L.map('map').setView([44.8606, 24.8678], 15);

	// https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png
	// https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png

	L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
		maxZoom: 20,
	}).addTo(map);

	return map;
}

const currentLocIcon = L.icon({
	// eslint-disable-next-line global-require
	iconUrl: require('../assets/marker-icon-orange.png'),
	iconSize: [25, 40],
	iconAnchor: [12, 40],
});

const trashcanIcon = L.icon({
	// eslint-disable-next-line global-require
	iconUrl: require('../assets/marker-icon-violet.png'),
	iconSize: [25, 40],
	iconAnchor: [12, 40],
});

function distance(lat1, lon1, lat2, lon2) {
	// Bullshit function from stackoverflow
	// https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
	// second answer

	const p = 0.017453292519943295; // Math.PI / 180
	const c = Math.cos;

	// eslint-disable-next-line max-len
	const a = 0.5 - c((lat2 - lat1) * p) / 2 + (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;

	return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}

// prettier-ignore
export {
	createMap,
	currentLocIcon,
	trashcanIcon,
	distance,
};
