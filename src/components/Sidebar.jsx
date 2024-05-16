import ProjectEntry from './ProjectEntry';

export default function Sidebar({ createNewProject, projects, selectProject }) {
	return (
		<aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
			<h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
				Your Projects
			</h2>
			<div className="flex items-center gap-4">
				<button
					onClick={createNewProject}
					className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
				>
					+ Add Project
				</button>
				<ul>
					{projects.map((project, index) => {
						return (
							<li key={index}>
								<button onClick={() => selectProject(index)}>
									{project.title}
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</aside>
	);
}
