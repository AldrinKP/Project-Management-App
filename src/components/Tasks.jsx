import { useRef } from 'react';
export default function Tasks({ updateProject, projectDetails }) {
	const task = useRef();

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
		<section>
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
		</section>
	);
}
