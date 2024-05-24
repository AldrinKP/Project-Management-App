import { useEffect, useRef } from 'react';
import Button from './Button';

export default function ErrorModal({ open, buttonConfirm }) {
	const dialog = useRef();

	useEffect(() => {
		open ? dialog.current.showModal() : dialog.current.close();
	}, [open]);

	return (
		<dialog
			ref={dialog}
			className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
		>
			<h2 className="text-xl font-bold text-stone-500 my-4">
				Invalid Input
			</h2>
			<p className="text-stone-400 mb-4">Please enter valid values</p>
			<form method="dialog" className="mt-4 text-right">
				<Button onClick={buttonConfirm}>Close</Button>
			</form>
		</dialog>
	);
}
