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
			<div className="flex">
				<button onClick={cancel}>Cancel</button>
				<button onClick={handleSave}>Save</button>
			</div>
			<label>TITLE</label>
			<Input type="text" ref={title} />
			<label>DESCRIPTION</label>
			<Input type="text" ref={description} />
			<label>Due Date</label>
			<Input type="date" ref={dueDate} />
		</div>
	);
}
