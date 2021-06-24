import fetch from 'isomorphic-unfetch';
import { SuccesResponse } from '../../sharedInterfaces';

export interface LoginBody {
	email: string;
	password: string;
}

export interface SignupBody extends LoginBody {
	name: string;
}

export interface LoginResponse {
	token: string;
}
export interface SignupResponse extends LoginResponse {
	user: {
		id: number;
		name: string;
		role: string;
	};
}

export async function SignUp(
	user: SignupBody,
	baseUrl = 'https://trashable-server.herokuapp.com',
): Promise<SignupResponse | SuccesResponse> {
	const raw = await fetch(`${baseUrl}/api/0.1/auth/signup`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	});

	const rawResponse = await raw.json();

	if (rawResponse.message !== null) {
		const response = rawResponse as SignupResponse;
		return response;
	}

	const response = rawResponse as SuccesResponse;
	response.succes = false;
	return response;
}
export async function LogIn(
	user: LoginBody,
	baseUrl = 'https://trashable-server.herokuapp.com',
): Promise<LoginResponse | SuccesResponse> {
	const raw = await fetch(`${baseUrl}/api/0.1/auth/login`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	});

	const rawResponse = await raw.json();

	if (rawResponse.message !== null) {
		const response = rawResponse as LoginResponse;
		return response;
	}

	const response = rawResponse as SuccesResponse;
	response.succes = false;
	return response;
}
