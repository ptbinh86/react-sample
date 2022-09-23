import ProjectList from './pages/ProjectList';
import ProjectEdit from './pages/ProjectEdit';

export default function projectRoutes() {
	return [{
		path: '/projects/:projectId',
		element: <ProjectEdit />
	}, {
		path: '/projects',
		element: <ProjectList />
	}];
}
