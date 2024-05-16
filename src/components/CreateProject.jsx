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
				<p>
					<label>TITLE</label>
					<Input type="text" ref={title} />
				</p>
				<p>
					<label>DESCRIPTION</label>
					<Input type="text" ref={description} />
				</p>
				<p>
					<label>Due Date</label>
					<Input type="date" ref={dueDate} />
				</p>
			</div>
		</div>
	);
}
