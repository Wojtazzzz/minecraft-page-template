'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { useNavItem } from './useNavItem';
import clsx from 'clsx';

type NavItemProps = {
	href: string;
	children: ReactNode;
};

export const NavItem = ({ href, children }: NavItemProps) => {
	const { isActive } = useNavItem(href);

	return (
		<Link
			href={href}
			className={clsx(
				'transition-opacity duration-300 ease-out uppercase',
				isActive ? 'opacity-100' : 'hover:opacity-100 opacity-60'
			)}
		>
			{children}
		</Link>
	);
};
