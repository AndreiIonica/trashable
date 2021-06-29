import fetch from 'isomorphic-unfetch';
import { SuccesResponse } from '../../sharedInterfaces';

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

export interface NewTrashcan {
	latitude: number;
	longitude: number;
	altitude: number;
	// eslint-disable-next-line camelcase
	street_address: string;
	// eslint-disable-next-line camelcase
	type_id: number;
	// eslint-disable-next-line camelcase
	city_id: number;
	// eslint-disable-next-line camelcase
	photo_url?: string;
	clean?: boolean;
}

export async function GetAll(baseUrl = 'https://trashable-server.herokuapp.com'): Promise<Trashcan[]> {
	const raw = await fetch(`${baseUrl}/api/v1/trashcan`);
	const trashcans = (await raw.json()) as Trashcan[];
	return trashcans;
}

export async function GetOne(id: number, baseUrl = 'https://trashable-server.herokuapp.com'): Promise<Trashcan> {
	const raw = await fetch(`${baseUrl}/api/v1/trashcan/${id}`);
	const trashcan = (await raw.json()) as Trashcan;
	return trashcan;
}

export async function CreateOne(
	newTrashcan: NewTrashcan,
	token: string,
	baseUrl = 'https://trashable-server.herokuapp.com',
): Promise<Trashcan> {
	const raw = await fetch(`${baseUrl}/api/v1/trashcan`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			'auth-token': token,
		},
		body: JSON.stringify(newTrashcan),
	});

	const created = await raw.json();

	return created as Trashcan;
}

export async function UpdateOne(
	updatedTrashcan: NewTrashcan,
	id: number,
	token: string,
	baseUrl = 'https://trashable-server.herokuapp.com',
): Promise<SuccesResponse> {
	const raw = await fetch(`${baseUrl}/api/v1/trashcan/${id}`, {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			'auth-token': token,
		},
		body: JSON.stringify(updatedTrashcan),
	});
	const status = (await raw.json()) as SuccesResponse;
	if (status.message === 'Executed correctly') status.succes = true;
	else status.succes = false;

	return status;
}

export async function DeleteOne(
	updatedTrashcan: NewTrashcan,
	id: number,
	token: string,
	baseUrl = 'https://trashable-server.herokuapp.com',
): Promise<SuccesResponse> {
	const raw = await fetch(`${baseUrl}/api/v1/trashcan/${id}`, {
		method: 'DELETE',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			'auth-token': token,
		},
	});

	const status = (await raw.json()) as SuccesResponse;
	if (status.message === 'Executed correctly') status.succes = true;
	else status.succes = false;

	return status;
}
