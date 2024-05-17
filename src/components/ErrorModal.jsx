import { forwardRef } from 'react';

const ErrorModal = forwardRef(function ErrorModal({}, ref) {
	return (
		<dialog ref={ref}>
			<p>Please enter valid values</p>
			<form method="dialog">
				<button>Close</button>
			</form>
		</dialog>
	);
});

export default ErrorModal;
