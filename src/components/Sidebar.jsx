export default function Sidebar() {
	return (
		<aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
			<div className="flex items-center gap-4">
				<h1>YOUR PROJECTS</h1>
				<menu className="flex items-center justify-end gap-4 my-4">
					<button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
						+ Add Project
					</button>
				</menu>
			</div>
		</aside>
	);
}
