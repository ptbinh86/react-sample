import { getProjectNoParams, getProjects } from "../services/ProjectService";

import DefaultLayout from "../../../components/Layout/DefaultLayout";
import ProjectFilters from "../components/ProjectFilters";
import ProjectTable from "../components/ProjectTable";
import useQuery from "../../../hooks/useQuery";
import { useState } from "react";

export default function ProjectList() {
	const [reactiveParams, setReactiveParams] = useState<
		Parameters<typeof getProjects>[0]
	>({
		keywords: "reactive",
	});

	// Call API automatically without params
	const { data: projectsX } = useQuery(getProjectNoParams);

	// Call API automatically with params
	const { data: projectsY, isLoading } = useQuery(getProjects, reactiveParams);

	// Call API manually
	const { data: projectsZ, refetch: searchProject } = useQuery(
		getProjects,
		undefined,
		{ enabled: false }
	);

	// Call API automatically with hard-coded params
	const { data: projectsV } = useQuery(getProjects, {
		keywords: "foo",
		status: "bar",
	});

	const onSearch = (params: Parameters<typeof getProjects>[0]) => {
		searchProject(params);
		setReactiveParams(params);
	};

	return (
		<DefaultLayout>
			<ProjectFilters onSearch={onSearch} disabled={isLoading} />
			<ProjectTable dataSource={projectsX} />
			<hr />
			<ProjectTable dataSource={projectsY} />
			<hr />
			<ProjectTable dataSource={projectsZ} />
			<hr />
			<ProjectTable dataSource={projectsV} />
		</DefaultLayout>
	);
}
