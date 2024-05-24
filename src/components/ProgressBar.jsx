import { useEffect, useState } from 'react';

export default function ProgressBar({ timer }) {
	const [remainingTime, setRemainingTime] = useState(timer);

	useEffect(() => {
		const progressTimer = setInterval(() => {
			setRemainingTime((prev) => prev - 10);
		}, 10);

		return () => {
			clearInterval(progressTimer);
		};
	});

	return (
		<progress
			value={remainingTime}
			max={timer}
			className="my-2 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-stone-600 [&::-moz-progress-bar]:bg-violet-600"
		/>
	);
}
