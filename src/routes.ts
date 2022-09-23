import projectRoutes from './modules/Project/routes';

export default function getRoutesConfig() {
	return [
		...projectRoutes()
	]
}
