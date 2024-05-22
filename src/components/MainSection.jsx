import { useContext } from 'react';
import { ProjectsContext } from '../store/projects-context';
import NoProject from './NoProject';
import CreateProject from './CreateProject';
import ProjectDetails from './ProjectDetails';

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
