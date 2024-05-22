import { useContext } from 'react';
import { ProjectsContext } from '../store/projects-context';

export default function MainSection() {
	const { selectedProjectIndex, isCreatingProject } =
		useContext(ProjectsContext);
	let content;

	if (selectedProjectIndex == null && !isCreatingProject) {
		content = <NoProject />;
	} else if (isCreatingProject) {
		content = <CreateProject />;
	} else {
		content = <ProjectDetails />;
	}
	return content;
}
