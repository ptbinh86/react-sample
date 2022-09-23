import ProjectList from "./pages/ProjectList";
import ProjectEdit from "./pages/ProjectEdit";

export default function sampleProjectRoutes() {
	return [
		{
			path: "/sample-projects/:projectId",
			element: <ProjectEdit />,
		},
		{
			path: "/sample-projects",
			element: <ProjectList />,
		},
	];
}
