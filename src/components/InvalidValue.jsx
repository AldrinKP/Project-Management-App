import Button from './Button';
export default function InvalidValue({ onConfirm }) {
	return (
		<div>
			<h2 className="text-xl font-bold text-stone-500 my-4">
				Invalid Input
			</h2>
			<p className="text-stone-400 mb-4">Please enter valid values</p>
			<form method="dialog" className="mt-4 text-right">
				<Button onClick={onConfirm}>Close</Button>
			</form>
		</div>
	);
}
