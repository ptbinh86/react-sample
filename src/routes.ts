import projectRoutes from "./modules/Project/routes";
import sampleProjectRoutes from "./modules/SampleProject/routes";

export default function getRoutesConfig() {
	return [...projectRoutes(), ...sampleProjectRoutes()];
}
