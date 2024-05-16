import Input from './Input';
import { useRef } from 'react';

export default function CreateProject({ saveProject, cancel }) {
	const title = useRef();
	const description = useRef();
	const dueDate = useRef();

	function handleSave() {
		const newProject = {
			title: title.current.value,
			description: description.current.value,
			dueDate: dueDate.current.value,
			tasks: [],
		};
		saveProject(newProject);
	}

	return (
		<div className="w-[35rem] mt-16 flex-col">
			<menu className="flex items-center justify-end gap-4 my-4">
				<li>
					<button
						onClick={cancel}
						className="text-stone-800 hover:text-stone-950"
					>
						Cancel
					</button>
				</li>
				<li>
					<button
						onClick={handleSave}
						className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
					>
						Save
					</button>
				</li>
			</menu>
			<div>
				<Input labelText="Title" ref={title} type="text" />
				<Input textarea labelText="Description" ref={description} />
				<Input labelText="Due Date" ref={dueDate} type="date" />
			</div>
		</div>
	);
}
