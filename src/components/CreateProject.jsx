import Input from './Input';
import Button from './Button';
import { useRef } from 'react';
import ErrorModal from './ErrorModal';

export default function CreateProject({ saveProject, cancel }) {
	const title = useRef();
	const description = useRef();
	const dueDate = useRef();
	const invalidValuesDialog = useRef();

	function handleSave() {
		const newTitle = title.current.value;
		const newDescription = description.current.value;
		const newDueDate = dueDate.current.value;

		if (newTitle === '' || newDescription === '' || newDueDate === '') {
			invalidValuesDialog.current.showModal();
		} else {
			const newProject = {
				title: newTitle,
				description: newDescription,
				dueDate: newDueDate,
				tasks: [],
			};
			saveProject(newProject);
		}
	}

	return (
		<>
			<ErrorModal ref={invalidValuesDialog} />
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
						<Button onClick={handleSave}>Save</Button>
					</li>
				</menu>
				<div>
					<Input labelText="Title" ref={title} type="text" />
					<Input textarea labelText="Description" ref={description} />
					<Input labelText="Due Date" ref={dueDate} type="date" />
				</div>
			</div>
		</>
	);
}
