import { forwardRef } from 'react';

const Input = forwardRef(function Input(
	{ textarea, labelText, ...props },
	ref
) {
	return (
		<p>
			<label>{labelText}</label>
			{textarea ? (
				<textarea {...props} ref={ref} />
			) : (
				<input {...props} ref={ref} />
			)}
		</p>
	);
});

export default Input;
