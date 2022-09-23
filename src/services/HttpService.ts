import { Response } from '../entities/Http';
import { defaultsDeep } from 'lodash/fp'

const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;

export function createApiUrl(requestPath: string): URL {
	return new URL(`${apiEndpoint}${requestPath}`);
}

export function withParams(
	url: string | URL,
	params: { [key: string]: any }
) {
	const urlWithParams = new URL(url);

	Object.keys(params).forEach((key) => {
		if (params[key] !== undefined) {
			urlWithParams.searchParams.append(key, params[key])
		}
	})

	return urlWithParams;
}

/**
 * @param url
 * @param options
 */
export async function get<T>(
	url: string | URL,
	options: { [key: string]: any } = {}
): Promise<Response<T>> {
	const withDefaults = defaultsDeep({
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});

	return await fetch(url, withDefaults(options)).then(response => {
		return response.json() as Promise<Response<T>>
	})
}
