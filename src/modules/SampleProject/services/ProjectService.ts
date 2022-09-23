import { Project } from "../entities/Project";

import { get, createApiUrl, withParams } from "../../../services/HttpService";

type GetProjectsParams = {
	keywords?: string;
	status?: string;
};
export function getProjects(params: GetProjectsParams) {
	return get<Project[]>(withParams(createApiUrl("projects.json"), params)).then(
		(data) => data.content
	);
}

export function getProjectNoParams() {
	return get<Project[]>(createApiUrl("projects.json")).then(
		(data) => data.content
	);
}
