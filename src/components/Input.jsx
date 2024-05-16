import { forwardRef } from 'react';

const Input = forwardRef(function Input({ ...props }, ref) {
	return (
		<input
			{...props}
			ref={ref}
			className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
		/>
	);
});

export default Input;
