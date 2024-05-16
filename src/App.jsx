import { useState } from 'react';
import Sidebar from './components/Sidebar';
import NoProject from './components/NoProject';
import CreateProject from './components/CreateProject';
import ProjectDetails from './components/ProjectDetails';

function App() {
	const [isCreatingProject, setIsCreatingProject] = useState(false);
	const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
	const [projects, setProjects] = useState([]);

	function saveProject(newProject) {
		setProjects((prevProjects) => {
			return [...prevProjects, newProject];
		});
		resetProjectSelection();
	}

	function createNewProject() {
		setSelectedProjectIndex(null);
		setIsCreatingProject(true);
	}

	function resetProjectSelection() {
		setIsCreatingProject(false);
		setSelectedProjectIndex(null);
	}

	function selectProject(projectIndex) {
		setSelectedProjectIndex(projectIndex);
	}

	function updateProject(updatedProject) {
		setProjects((prevProjects) => {
			const newProjects = prevProjects.map((project, index) => {
				if (selectedProjectIndex === index) {
					return updatedProject;
				} else {
					return project;
				}
			});
			return newProjects;
		});
	}

	return (
		<main className="h-screen my-8 flex gap-8">
			<Sidebar
				createNewProject={createNewProject}
				projects={projects}
				selectProject={selectProject}
			/>
			{selectedProjectIndex == null && !isCreatingProject && (
				<NoProject createNewProject={createNewProject} />
			)}
			{isCreatingProject && (
				<CreateProject
					saveProject={saveProject}
					cancel={resetProjectSelection}
				/>
			)}
			{selectedProjectIndex !== null && (
				<ProjectDetails
					projectDetails={projects[selectedProjectIndex]}
				/>
			)}
			{console.log(projects)}
		</main>
	);
}

export default App;
