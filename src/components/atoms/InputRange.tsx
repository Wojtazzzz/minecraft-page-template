import type { InputHTMLAttributes } from 'react';

type InputRangeProps = {
	label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputRange = ({ label, step, min, max, value, onChange }: InputRangeProps) => {
	return (
		<label className="block mb-2">
			<span className="text-sm font-medium text-white">{label}</span>
			<input
				type="range"
				value={value}
				step={step}
				min={min}
				max={max}
				className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700"
				onChange={onChange}
			/>
		</label>
	);
};
