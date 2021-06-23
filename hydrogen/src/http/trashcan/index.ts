import fetch from 'isomorphic-unfetch';

export interface Trashcan {
	id: number;
	latitude: number;
	longitude: number;
	// eslint-disable-next-line camelcase
	street_address: string;
	altitude: number;
	// eslint-disable-next-line camelcase
	type_id: number;
	// eslint-disable-next-line camelcase
	city_id: number;
	// eslint-disable-next-line camelcase
	user_id: number;
	clean: boolean | null;
	// eslint-disable-next-line camelcase
	photo_url: string | null;
	// eslint-disable-next-line camelcase
	created_at: string;
	// eslint-disable-next-line camelcase
	updated_at: string;
}

export async function GetAll(baseUrl = 'https://trashable-server.herokuapp.com'): Promise<Trashcan[]> {
	const raw = await fetch(`${baseUrl}/api/0.1/trashcan`);
	const trashcans = (await raw.json()) as Trashcan[];
	return trashcans;
}

export async function GetOne(id: number, baseUrl = 'https://trashable-server.herokuapp.com'): Promise<Trashcan> {
	const raw = await fetch(`${baseUrl}/api/0.1/trashcan/${id}`);
	const trashcan = (await raw.json()) as Trashcan;
	return trashcan;
}
