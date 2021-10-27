import { divIcon as DivIcon } from 'leaflet';

import type { DivIcon as IDivIcon } from 'leaflet';

import markerColors from '@/assets/raw/MarkerColors';
import { rawSVG as markerIconSVG } from '@/assets/raw/Marker';
import { rawSVG as recyclingCenterIconSVG } from '../raw/RecyclingCenterIcon';

const MarkerIcons: IDivIcon[] = [];
markerColors.forEach(c => {
	MarkerIcons.push(
		DivIcon({
			className: 'marker-normal',
			html: markerIconSVG.replace('#000000', c),
			iconAnchor: [22.5, 45],
		}),
	);
});
MarkerIcons.push(
	DivIcon({
		className: 'marker-recycling-center',
		html: recyclingCenterIconSVG,
		iconAnchor: [22.5, 45],
	}),
);

export default MarkerIcons;
