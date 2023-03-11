import { usePathname } from 'next/navigation';

export const useNavItem = (pathname: string) => {
	const currentPathname = usePathname();

	const isActive = pathname === currentPathname;

	return {
		isActive,
	};
};
