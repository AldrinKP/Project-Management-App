import { useState } from 'react';
import Sidebar from './components/Sidebar';
import ProjectMain from './components/ProjectMain';

function App() {
	const [isCreatingProject, setIsCreatingProject] = useState(false);
	const [selectedProject, setSelectedProject] = useState(null);
	const [projects, setProjects] = useState(null);

	function createProject(newProject) {
		setProjects((prevProjects) => {
			return [...prevProjects, newProject];
		});
	}

	return (
		<main className="h-screen my-8 flex gap-8">
			<Sidebar addProject={setIsCreatingProject} />
			<ProjectMain
				creatingProject={isCreatingProject}
				selectProject={selectedProject}
				addProject={setIsCreatingProject}
			/>
		</main>
	);
}

export default App;
