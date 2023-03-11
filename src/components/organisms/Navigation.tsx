import { navLinks } from '@/utils/navLinks';
import { NavItem } from '../atoms/navItem/NavItem';
import { MobileNav } from '../molecules/mobileNav/MobileNav';

export const Navigation = () => {
	return (
		<nav className="flex justify-between py-8 md:py-10 lg:py-12 xl:py-14">
			<span className="text-lg font-bold tracking-wide">LOGO</span>

			{/* Desktop navigation */}
			<ul role="list" className="hidden lg:flex gap-x-8">
				{navLinks.map(({ href, name }, index) => (
					<li key={index} className="font-medium">
						<NavItem href={href}>{name}</NavItem>
					</li>
				))}
			</ul>

			{/* Mobile navigation */}
			<MobileNav />
		</nav>
	);
};
