import { forwardRef } from 'react';
import Button from './Button';

const ErrorModal = forwardRef(function ErrorModal({}, ref) {
	return (
		<dialog
			ref={ref}
			className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
		>
			<h2 className="text-xl font-bold text-stone-500 my-4">
				Invalid Input
			</h2>
			<p className="text-stone-400 mb-4">Please enter valid values</p>
			<form method="dialog" className="mt-4 text-right">
				<Button>Close</Button>
			</form>
		</dialog>
	);
});

export default ErrorModal;
