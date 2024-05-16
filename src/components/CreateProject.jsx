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
		<div className="flex-col">
			<menu>
				<li>
					<button onClick={cancel}>Cancel</button>
				</li>
				<li>
					<button onClick={handleSave}>Save</button>
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
