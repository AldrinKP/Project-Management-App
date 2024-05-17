import { useRef } from 'react';

export default function ProjectDetails({
	projectDetails,
	updateProject,
	deleteProject,
}) {
	const task = useRef();
	const formattedDate = new Date(projectDetails.dueDate).toLocaleDateString(
		'en-us',
		{
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		}
	);

	function handleAddTask() {
		const updatedProject = {
			...projectDetails,
			tasks: [...projectDetails.tasks, task.current.value],
		};
		updateProject(updatedProject);
		task.current.value = '';
	}

	function handleRemoveTask(taskIndex) {
		const updatedProject = {
			...projectDetails,
			tasks: projectDetails.tasks.toSpliced(taskIndex, 1),
		};
		updateProject(updatedProject);
	}

	return (
		<div className="w-[35rem] mt-16">
			<header className="pb-4 mb-4 border-b-2 border-stone-300">
				<div className="flex items-center justify-between">
					<h1 className="text-3xl font-bold text-stone-600 mb-2">
						{projectDetails.title}
					</h1>
					<button
						onClick={deleteProject}
						className="text-stone-600 hover:text-stone-950"
					>
						Delete
					</button>
				</div>
				<p className="mb-4 text-stone-400">{formattedDate}</p>
				<p className="text-stone-600 whitespace-pre-wrap">
					{projectDetails.description}
				</p>
			</header>
			<h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
			<div className="flex items-center gap-4">
				<input
					ref={task}
					type="text"
					className="w-64 px-2 py-1 rounded-sm bg-stone-200"
				/>
				<button
					onClick={handleAddTask}
					className="text-stone-700 hover:bg-stone-950 hover:text-stone-200 py-1 px-2 rounded-md"
				>
					Add Task
				</button>
			</div>
			{projectDetails.tasks.length === 0 ? (
				<p className="text-stone-800 my-4">
					This project does not have any tasks yet
				</p>
			) : (
				<ul>
					{projectDetails.tasks.map((task, index) => {
						return (
							<li
								className="flex justify-between my-4"
								key={index}
							>
								<p>{task}</p>
								<button
									onClick={() => handleRemoveTask(index)}
									className="text-stone-700 hover:bg-stone-950 hover:text-stone-200 py-1 px-2 rounded-md"
								>
									Clear
								</button>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}
