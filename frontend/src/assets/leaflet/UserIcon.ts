import userIconSVG from '@/assets/raw/UserIcon';
import { divIcon as DivIcon } from 'leaflet';

const UserIcon = DivIcon({
	className: 'user-icon-map',
	html: userIconSVG,
	iconAnchor: [22.5, 0],
});

export default UserIcon;
