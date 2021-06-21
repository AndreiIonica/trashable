import fetch from 'isomorphic-unfetch';

export interface County {
	id: number;
	name: string;
	code: string;
	// eslint-disable-next-line camelcase
	created_at: string;
	// eslint-disable-next-line camelcase
	updated_at: string;
}

export async function GetAll(baseUrl = 'https://trashable-server.herokuapp.com'): Promise<County[]> {
	const raw = await fetch(`${baseUrl}/api/0.1/county/`);
	const types = (await raw.json()) as County[];
	return types;
}

export async function GetOne(id: number, baseUrl = 'https://trashable-server.herokuapp.com'): Promise<County> {
	const raw = await fetch(`${baseUrl}/api/0.1/county/${id}`);
	const type = (await raw.json()) as County;
	return type;
}
