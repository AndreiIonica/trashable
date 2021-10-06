import userIconSVG from '@/assets/raw/UserIcon';
import { divIcon as DivIcon } from 'leaflet';

const UserIcon = DivIcon({
	className: 'user-icon-map',
	html: userIconSVG,
});

export default UserIcon;
