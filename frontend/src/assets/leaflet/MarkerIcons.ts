import { rawSVG as markerIconSvg } from '@/assets/raw/Marker';
import markerColors from '@/assets/raw/MarkerColors';
import type { DivIcon as IDivIcon } from 'leaflet';
import { divIcon as DivIcon } from 'leaflet';

const MarkerIcons: IDivIcon[] = [];
markerColors.forEach((c) => {
	MarkerIcons.push(
		DivIcon({
			className: 'mark',
			html: markerIconSvg.replace('#000000', c),
		}),
	);
});

export default MarkerIcons;
