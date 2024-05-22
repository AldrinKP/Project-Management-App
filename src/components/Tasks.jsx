import { useRef } from 'react';
import { useContext } from 'react';
import { ProjectsContext } from '../store/projects-context';

export default function Tasks() {
	const task = useRef();
	const { updateProject, selectedProjectIndex, projects } =
		useContext(ProjectsContext);
	const selectedProject = projects[selectedProjectIndex];

	function handleAddTask() {
		const updatedProject = {
			...selectedProject,
			tasks: [...selectedProject.tasks, task.current.value],
		};
		updateProject(updatedProject);
		task.current.value = '';
	}

	function handleRemoveTask(taskIndex) {
		const updatedProject = {
			...selectedProject,
			tasks: selectedProject.tasks.toSpliced(taskIndex, 1),
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
			{selectedProject.tasks.length === 0 ? (
				<p className="text-stone-800 my-4">
					This project does not have any tasks yet
				</p>
			) : (
				<ul>
					{selectedProject.tasks.map((task, index) => {
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
