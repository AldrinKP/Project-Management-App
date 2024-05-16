import CreateProject from './CreateProject';
import NoProject from './NoProject';

export default function ProjectMain({ creatingProject, selectedProject }) {
	return (
		<>
			{!selectedProject && <NoProject />}
			{creatingProject && <CreateProject />}
		</>
	);
}
