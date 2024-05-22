import { createContext } from 'react';

export const ProjectsContext = createContext({
	projects: [],
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
	const ctxValue = {
		projects: projects,
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
