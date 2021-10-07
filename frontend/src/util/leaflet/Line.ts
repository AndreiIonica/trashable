import { polyline } from 'leaflet';

import type { LatLngBounds, LatLngExpression, Map as IMap } from 'leaflet';

class Line {
	private line = polyline([]);

	private array: LatLngExpression[] = [];

	private map: IMap;

	private color: string;

	constructor(argMap: IMap, argColor?: string) {
		this.map = argMap;
		this.color = argColor ?? 'black';
	}

	setCoords(A: LatLngExpression, B: LatLngExpression): void {
		// A polyline can contain more than 2 points, for now limiting it
		this.array = [];
		this.array.push(A);
		this.array.push(B);

		this.line.setLatLngs(this.array);
		this.line.setStyle({
			color: this.color,
			weight: 10,
		});
		this.line.addTo(this.map);
	}

	getBounds(): LatLngBounds {
		return this.line.getBounds();
	}
}

export default Line;
