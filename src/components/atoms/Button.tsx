'use client';

import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
	callback: () => void;
	children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ callback, children, ...props }: ButtonProps) => {
	return (
		<button
			{...props}
			className="px-7 py-2.5 rounded-lg shadow-lg font-medium bg-primary hover:bg-primary/90 active:bg-primary/80"
			onClick={callback}
		>
			{children}
		</button>
	);
};
