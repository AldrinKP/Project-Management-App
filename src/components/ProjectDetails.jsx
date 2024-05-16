import { useRef } from 'react';

export default function ProjectDetails({ projectDetails, updateProject }) {
	const task = useRef();

	function handleAddTask() {
		const updatedProject = {
			...projectDetails,
			tasks: [...projectDetails.tasks, task.current.value],
		};
		updateProject(updatedProject);
	}
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
				<input ref={task} />
				<button onClick={handleAddTask}>Add Task</button>
			</div>
			{projectDetails.tasks.length === 0 ? (
				<p>This project does not have any tasks yet</p>
			) : (
				<ul>
					{projectDetails.tasks.map((task, index) => {
						return (
							<li
								className="flex justify-between my-4"
								key={index}
							>
								<p>{task}</p>
								<button>Clear</button>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}
