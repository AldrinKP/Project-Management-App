import noProjects from '../assets/no-projects.png';

export default function NoProject({ createNewProject }) {
	return (
		<div>
			<img
				src={noProjects}
				className="w-16 h-16 object-contain mx-auto"
			/>
			<h2>No Project Selected</h2>
			<p>Select a project or get started with a new one</p>
			<p>
				<button onClick={createNewProject}>Create new project</button>
			</p>
		</div>
	);
}
