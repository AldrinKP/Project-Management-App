import { createContext, useState, useReducer } from 'react';

export const ProjectsContext = createContext({
	projects: [],
	isCreatingProject: false,
	selectedProjectIndex: null,
	createNewProject: () => {},
	saveProject: () => {},
	resetProjectSelection: () => {},
	selectProject: () => {},
	deleteProject: () => {},
	updateProject: () => {},
});

function projectsReducer(state, action) {
	if (action.type === 'SAVE_PROJECT') {
		return { projects: [...state.projects, action.payload] };
	}
	if (action.type === 'DELETE_PROJECT') {
		return {
			projects: state.projects.toSpliced(action.payload, 1),
		};
	}
	if (action.type === 'UPDATE_PROJECT') {
		const newProjects = state.projects.map((project, index) => {
			if (action.payload.selectedProjectIndex === index) {
				return action.payload.updatedProject;
			} else {
				return project;
			}
		});
		return { projects: newProjects };
	}
	return state;
}

export default function ProjectsContextProvider({ children }) {
	const [isCreatingProject, setIsCreatingProject] = useState(false);
	const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
	const [projectsState, projectsDispatch] = useReducer(projectsReducer, {
		projects: [],
	});

	function handleCreateNewProject() {
		setSelectedProjectIndex(null);
		setIsCreatingProject(true);
	}

	function handleSaveProject(newProject) {
		projectsDispatch({
			type: 'SAVE_PROJECT',
			payload: newProject,
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
		projectsDispatch({
			type: 'DELETE_PROJECT',
			payload: selectedProjectIndex,
		});
		handleResetProjectSelection();
	}

	function handleUpdateProject(updatedProject) {
		projectsDispatch({
			type: 'UPDATE_PROJECT',
			payload: { selectedProjectIndex, updatedProject },
		});
	}

	const ctxValue = {
		projects: projectsState.projects,
		isCreatingProject,
		selectedProjectIndex,
		createNewProject: handleCreateNewProject,
		saveProject: handleSaveProject,
		resetProjectSelection: handleResetProjectSelection,
		selectProject: handleSelectProject,
		deleteProject: handleDeleteProject,
		updateProject: handleUpdateProject,
	};
	return (
		<ProjectsContext.Provider value={ctxValue}>
			{children}
		</ProjectsContext.Provider>
	);
}
