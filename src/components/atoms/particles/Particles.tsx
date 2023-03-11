'use client';

import { Particles as ReactParticles } from 'react-particles';

import { config } from './config';
import { useParticles } from './useParticles';

export const Particles = () => {
	const { init } = useParticles();

	return (
		<ReactParticles
			id="tsparticles"
			init={init}
			options={config}
			className="absolute z-0 pointer-events-none top-0 left-0 w-screen h-screen"
		/>
	);
};
