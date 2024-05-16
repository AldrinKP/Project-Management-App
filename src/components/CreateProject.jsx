export default function CreateProject() {
	return (
		<div className="flex-col">
			<div className="flex">
				<button>Cancel</button>
				<div>Save</div>
			</div>
			<label>TITLE</label>
			<input />
			<label>DESCRIPTION</label>
			<input></input>
			<label>Due Date</label>
			<input type="date"></input>
		</div>
	);
}
