import type { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';

export const useParticles = () => {
	const init = useCallback(async (engine: Engine) => {
		await loadFull(engine);
	}, []);

	return {
		init,
	};
};
