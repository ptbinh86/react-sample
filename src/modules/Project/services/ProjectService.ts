import { Project } from '../entities/Project'
import {
	get,
	createApiUrl,
	withParams
} from '../../../services/HttpService'
import { useState } from 'react';

export function getProjects (params: { [key: string]: any } = {}) {
	return get<Project[]>(withParams(createApiUrl("projects.json"), params)).then(
		(data) => data.content
	);
}
//
export function useProjectQuery() {
	const [busy, setBusy] = useState<boolean>(false);
	const [errors, setErrors] = useState<boolean>(false);
	const [data, setData] = useState<Project[]>([]);

	const query = async (filters: { [key: string]: any } = {}) => {
		try {
			const endpoint = withParams(
				createApiUrl('projects.json'),
				filters
			);

			setBusy(true)
			setData((await get<Project>(endpoint)).content)
		} catch (e) {
			setErrors(e)
		} finally {
			setBusy(false)
		}
	}

	return {
		data,
		busy,
		errors,
		query
	} as const
}
