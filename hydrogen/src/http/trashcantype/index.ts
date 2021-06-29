import fetch from 'isomorphic-unfetch';

export interface TrashcanType {
	id: number;
	name: string;
	// eslint-disable-next-line camelcase
	created_at: string;
	// eslint-disable-next-line camelcase
	updated_at: string;
}

export async function GetAll(baseUrl = 'https://trashable-server.herokuapp.com'): Promise<TrashcanType[]> {
	const raw = await fetch(`${baseUrl}/api/v1/trashcanType`);
	const types = (await raw.json()) as TrashcanType[];
	return types;
}

export async function GetOne(id: number, baseUrl = 'https://trashable-server.herokuapp.com'): Promise<TrashcanType> {
	const raw = await fetch(`${baseUrl}/api/v1/trashcanType/${id}`);
	const type = (await raw.json()) as TrashcanType;
	return type;
}
