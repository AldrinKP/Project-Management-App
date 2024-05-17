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

	function deleteProject() {
		setProjects((prevProjects) => {
			return prevProjects.toSpliced(selectedProjectIndex, 1);
		});
		resetProjectSelection();
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

	let content;

	if (selectedProjectIndex == null && !isCreatingProject) {
		content = <NoProject createNewProject={createNewProject} />;
	} else if (isCreatingProject) {
		content = (
			<CreateProject
				saveProject={saveProject}
				cancel={resetProjectSelection}
			/>
		);
	} else {
		content = (
			<ProjectDetails
				projectDetails={projects[selectedProjectIndex]}
				updateProject={updateProject}
				deleteProject={deleteProject}
			/>
		);
	}

	return (
		<main className="h-screen my-8 flex gap-8">
			<Sidebar
				createNewProject={createNewProject}
				projects={projects}
				selectProject={selectProject}
				selectedProject={selectedProjectIndex}
			/>
			{content}
		</main>
	);
}

export default App;
