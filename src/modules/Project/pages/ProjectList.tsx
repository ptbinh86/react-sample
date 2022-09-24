import { getProjects } from '../services/ProjectService';
import { useSearchParams } from 'react-router-dom';

import {
	Fragment,
	useEffect
} from 'react';

import ProjectFilters from '../components/ProjectFilters';
import ProjectTable from '../components/ProjectTable';
import useQuery from '../../../hooks/useQuery';

export default function ProjectList() {
	const [search, setSearch] = useSearchParams();
	const { data, isLoading, refetch: searchProject } = useQuery(
		getProjects,
		undefined,
		{ enabled: false }
	)

	useEffect(() => {
		searchProject(Object.fromEntries(search));
	}, [search])

	return (
		<Fragment>
			<ProjectFilters onSearch={(filters) => setSearch(filters)} disabled={isLoading} />
			<ProjectTable dataSource={data} />
		</Fragment>
	)
}
