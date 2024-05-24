import { useEffect } from 'react';
import Button from './Button';
import ProgressBar from './ProgressBar';

const TIMER = 3000;

export default function DeleteTaskConfirmation({ onConfirm, onCancel }) {
	useEffect(() => {
		const autoConfirm = setTimeout(() => {
			onConfirm();
		}, TIMER);

		return () => {
			clearTimeout(autoConfirm);
		};
	}, [onConfirm]);
	return (
		<div className="flex flex-col justify-evenly items-center">
			<p className="text-stone-400 mb-4 font-bold text-lg">
				Are you sure you want to delete this task?
			</p>
			<div className="flex gap-5">
				<Button onClick={onConfirm}>Delete</Button>
				<Button onClick={onCancel}>Cancel</Button>
			</div>
			<ProgressBar timer={TIMER} />
		</div>
	);
}
