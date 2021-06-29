import fetch from 'isomorphic-unfetch';

export interface Region {
	id: number;
	name: string;
	code: string;
	// eslint-disable-next-line camelcase
	created_at: string;
	// eslint-disable-next-line camelcase
	updated_at: string;
}

export async function GetAll(baseUrl = 'https://trashable-server.herokuapp.com'): Promise<Region[]> {
	const raw = await fetch(`${baseUrl}/api/v1/region/`);
	const types = (await raw.json()) as Region[];
	return types;
}

export async function GetOne(id: number, baseUrl = 'https://trashable-server.herokuapp.com'): Promise<Region> {
	const raw = await fetch(`${baseUrl}/api/v1/region/${id}`);
	const type = (await raw.json()) as Region;
	return type;
}
