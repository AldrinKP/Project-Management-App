import { useState } from 'react';
import Sidebar from './components/Sidebar';
import NoProject from './components/NoProject';
import CreateProject from './components/CreateProject';

function App() {
	const [isCreatingProject, setIsCreatingProject] = useState(false);
	const [selectedProject, setSelectedProject] = useState(null);
	const [projects, setProjects] = useState([]);

	function saveProject(newProject) {
		setProjects((prevProjects) => {
			return [...prevProjects, newProject];
		});
	}

	function createNewProject() {
		setIsCreatingProject(true);
	}

	function resetProjectSelection() {
		setIsCreatingProject(false);
		setSelectedProject(null);
	}

	return (
		<main className="h-screen my-8 flex gap-8">
			<Sidebar createNewProject={createNewProject} />
			{!selectedProject && !isCreatingProject && (
				<NoProject createNewProjectt={createNewProject} />
			)}
			{isCreatingProject && (
				<CreateProject
					saveProject={saveProject}
					cancel={resetProjectSelection}
				/>
			)}
			{console.log(projects)}
		</main>
	);
}

export default App;
