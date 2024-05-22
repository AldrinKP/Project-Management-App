import { createContext, useState } from 'react';

export const ProjectsContext = createContext({
	projects: [],
	isCreatingProject: false,
	selectedProjectIndex: null,
	createNewProject: () => {},
	saveProject: () => {},
	resetProjectSelection: () => {},
	selectProject: () => {},
	deleteProject: () => {},
});

export default function ProjectsContextProvider({ children }) {
	const [isCreatingProject, setIsCreatingProject] = useState(false);
	const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
	const [projects, setProjects] = useState([]);

	function handleCreateNewProject() {
		setSelectedProjectIndex(null);
		setIsCreatingProject(true);
	}

	function handleSaveProject(newProject) {
		setProjects((prevProjects) => {
			return [...prevProjects, newProject];
		});
		handleResetProjectSelection();
	}

	function handleResetProjectSelection() {
		setIsCreatingProject(false);
		setSelectedProjectIndex(null);
	}

	function handleSelectProject(projectIndex) {
		setSelectedProjectIndex(projectIndex);
	}

	function handleDeleteProject() {
		setProjects((prevProjects) => {
			return prevProjects.toSpliced(selectedProjectIndex, 1);
		});
		handleResetProjectSelection();
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

	const ctxValue = {
		projects,
		isCreatingProject,
		selectedProjectIndex,
		createNewProject: handleCreateNewProject,
		saveProject: handleSaveProject,
		resetProjectSelection: handleResetProjectSelection,
		selectProject: handleSelectProject,
		deleteProject: handleDeleteProject,
	};
	return (
		<ProjectsContext.Provider value={ctxValue}>
			{children}
		</ProjectsContext.Provider>
	);
}
