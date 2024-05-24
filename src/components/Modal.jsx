import { useEffect, useRef } from 'react';

export default function ErrorModal({ open, children }) {
	const dialog = useRef();

	useEffect(() => {
		open ? dialog.current.showModal() : dialog.current.close();
	}, [open]);

	return (
		<dialog
			ref={dialog}
			className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
		>
			{open ? children : null}
		</dialog>
	);
}
