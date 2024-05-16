import Input from './Input';

export default function CreateProject({ saveProject, cancel }) {
	return (
		<div className="flex-col">
			<div className="flex">
				<button onClick={cancel}>Cancel</button>
				<button>Save</button>
			</div>
			<label>TITLE</label>
			<Input type={text} />
			<label>DESCRIPTION</label>
			<Input type="text" />
			<label>Due Date</label>
			<Input type="date" />
		</div>
	);
}
