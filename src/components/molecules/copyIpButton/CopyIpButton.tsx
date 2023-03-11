'use client';

import { Button } from '@/components/atoms/Button';
import { useCopyIp } from './useCopyIp';

export const CopyIpButton = () => {
	const { copyIp } = useCopyIp();

	return (
		<Button type="button" callback={copyIp}>
			Skopiuj adres IP
		</Button>
	);
};
