import { divIcon as DivIcon } from 'leaflet';

import type { DivIcon as IDivIcon } from 'leaflet';

import markerColors from '@/assets/raw/MarkerColors';
import { rawSVG as markerIconSVG } from '@/assets/raw/Marker';
import { rawSVG as userIconSVG } from '../raw/RecyclingCenterIcon';

const MarkerIcons: IDivIcon[] = [];
markerColors.forEach((c) => {
	MarkerIcons.push(
		DivIcon({
			className: 'marker-normal',
			html: markerIconSVG.replace('#000000', c),
		}),
	);
});
MarkerIcons.push(
	DivIcon({
		className: 'marker-recycling-center',
		html: userIconSVG,
	}),
);

export default MarkerIcons;
