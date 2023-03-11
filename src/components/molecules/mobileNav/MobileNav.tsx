'use client';

import { NavItem } from '@/components/atoms/navItem/NavItem';
import { navLinks } from '@/utils/navLinks';
import { useMobileNav } from './useMobileNav';
import clsx from 'clsx';
import Image from 'next/image';

export const MobileNav = () => {
	const { isActive, open, close } = useMobileNav();

	return (
		<>
			<div
				className={clsx(
					'lg:hidden flex justify-center items-center bg-theme-primary z-40 fixed top-0 left-0 w-screen h-screen',
					isActive ? 'block' : 'hidden pointer-events-none'
				)}
			>
				<button className="absolute top-8 right-8" onClick={close}>
					<Image width="28" height="28" src="/img/cross.svg" alt="" />
					<span className="sr-only">Close navigation</span>
				</button>

				<ul role="list" className="flex flex-col items-center gap-y-8">
					{navLinks.map(({ href, name }, index) => (
						<li key={index} className="text-xl font-medium">
							<NavItem href={href}>{name}</NavItem>
						</li>
					))}
				</ul>
			</div>

			<button className="lg:hidden lg:pointer-events-none" onClick={open}>
				<Image width="28" height="28" src="/img/menu.svg" alt="" />
				<span className="sr-only">Open navigation</span>
			</button>
		</>
	);
};
