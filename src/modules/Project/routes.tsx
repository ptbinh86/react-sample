import ProjectList from './pages/ProjectList';
import ProjectEdit from './pages/ProjectEdit';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import { Outlet } from 'react-router-dom';

export default function projectRoutes() {
	return [{
		path: '/projects',
		element: (
			<DefaultLayout>
				<Outlet />
			</DefaultLayout>
		),
		children: [{
			path: ':projectId',
			element: <ProjectEdit />
		}, {
			index: true,
			element: <ProjectList />
		}]
	}];
}
