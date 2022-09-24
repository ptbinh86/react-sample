import projectRoutes from './modules/Project/routes';
import dashboardRoutes from './modules/Dashboard/routes';
import sampleProjectRoutes from './modules/SampleProject/routes';

export default function getRoutesConfig() {
	return [
		...dashboardRoutes(),
		...projectRoutes(),
		...sampleProjectRoutes()
	]
}
