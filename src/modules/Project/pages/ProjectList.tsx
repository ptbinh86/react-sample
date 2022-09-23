import { useProjectQuery } from '../services/ProjectService';
import { useEffect } from 'react';

import DefaultLayout from '../../../components/Layout/DefaultLayout';
import ProjectFilters from '../components/ProjectFilters';
import ProjectTable from '../components/ProjectTable';

export default function ProjectList() {
	const {
		data,
		busy,
		query
	} = useProjectQuery()

	/**
	 * Callback method that executes the query
	 * when the filters' parameters are changed
	 *
	 * @param filters
	 */
	const handleSearch = (filters) => {
		query(filters)
	}

	/**
	 * Initial query project data
	 */
	useEffect(() => {
		query();
	}, [])

	return (
		<DefaultLayout>
			<ProjectFilters onSearch={handleSearch} disabled={busy}/>
			<ProjectTable dataSource={data}/>
		</DefaultLayout>
	)
}
