export default function ProjectDetails({ projectDetails }) {
	console.log(projectDetails);
	return (
		<div>
			<div>
				<h2>{projectDetails.title}</h2>
				<button>Delete</button>
			</div>
			{/*TODO: convert to format: Aug 23, 2024 */}
			<p>{projectDetails.dueDate}</p>
			<p>{projectDetails.description}</p>
			<hr />
			<p>Tasks</p>
			<div>
				<input />
				<button>Add Task</button>
			</div>
			<p>This project does not have any tasks yet</p>
		</div>
	);
}
