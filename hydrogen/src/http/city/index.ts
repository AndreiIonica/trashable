export interface City {
	id: number;
	name: string;
	// eslint-disable-next-line camelcase
	region_id: number;
	// eslint-disable-next-line camelcase
	created_at: string;
	// eslint-disable-next-line camelcase
	updated_at: string;
}

export async function GetAll(baseUrl = 'https://trashable-server.herokuapp.com'): Promise<City[]> {
	const raw = await window.fetch(`${baseUrl}/api/v1/city/`);
	const types = (await raw.json()) as City[];
	return types;
}

export async function GetOne(id: number, baseUrl = 'https://trashable-server.herokuapp.com'): Promise<City> {
	const raw = await window.fetch(`${baseUrl}/api/v1/city/${id}`);
	const type = (await raw.json()) as City;
	return type;
}
