import Button from './Button';

export default function DeleteTaskConfirmation({ onConfirm, onCancel }) {
	return (
		<div>
			<p className="text-stone-400 mb-4 font-bold text-lg">
				Are you sure you want to delete this task?
			</p>
			<div className="flex justify-evenly">
				<Button onClick={onConfirm}>Delete</Button>
				<Button onClick={onCancel}>Cancel</Button>
			</div>
		</div>
	);
}
