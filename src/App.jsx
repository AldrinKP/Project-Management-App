import { useState } from 'react';
import Sidebar from './components/Sidebar';
import NoProject from './components/NoProject';
import CreateProject from './components/CreateProject';

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
			{!selectedProject && <NoProject />}
			{creatingProject && <CreateProject />}
		</main>
	);
}

export default App;
