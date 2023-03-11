import { useState } from 'react';
import type { ChangeEvent } from 'react';
import type { ISourceOptions } from 'tsparticles-engine';

type SizeValue = {
	max: number;
	min: number;
};

export const useParticlesConfig = () => {
	const [config, setConfig] = useState<ISourceOptions>(particlesConfig);

	const changeSpeed = (event: ChangeEvent<HTMLInputElement>) => {
		setConfig(() => ({
			...config,
			particles: {
				...config.particles,
				move: {
					...config.particles?.move,
					speed: Number(event.currentTarget.value),
				},
			},
		}));
	};

	const changeQuantity = (event: ChangeEvent<HTMLInputElement>) => {
		setConfig(() => ({
			...config,
			particles: {
				...config.particles,
				number: {
					...config.particles?.number,
					value: Number(event.currentTarget.value),
				},
			},
		}));
	};

	const changeSize = (event: ChangeEvent<HTMLInputElement>) => {
		setConfig(() => ({
			...config,
			particles: {
				...config.particles,
				size: {
					...config.particles?.size,
					value: {
						...(config.particles!.size!.value as SizeValue),
						min: Number(event.currentTarget.value) - 5,
						max: Number(event.currentTarget.value),
					},
				},
			},
		}));
	};

	const changeOpacity = (event: ChangeEvent<HTMLInputElement>) => {
		setConfig(() => ({
			...config,
			particles: {
				...config.particles,
				opacity: {
					...config.particles?.opacity,
					value: Number(event.currentTarget.value),
				},
			},
		}));
	};

	const resetToDefaults = () => {
		setConfig(() => ({
			...particlesConfig,
		}));
	};

	return {
		config,
		speed: config.particles?.move?.speed,
		changeSpeed,
		quantity: config.particles?.number?.value,
		changeQuantity,
		size: (config.particles?.size?.value as SizeValue).max,
		changeSize,
		opacity: config.particles?.opacity?.value,
		changeOpacity,
		resetToDefaults,
	};
};

const particlesConfig = {
	fpsLimit: 120,
	interactivity: {
		events: {
			onClick: {
				enable: true,
				mode: 'push',
			},
			onHover: {
				enable: false,
				mode: 'repulse',
			},
			resize: true,
		},
		modes: {
			push: {
				quantity: 4,
			},
			repulse: {
				distance: 200,
				duration: 0.4,
			},
		},
	},
	particles: {
		color: {
			value: '#6028ff',
		},
		links: {
			color: '#ffffff',
			distance: 150,
			enable: false,
			opacity: 1,
			width: 1,
		},
		collisions: {
			enable: false,
		},
		move: {
			direction: 'none',
			enable: true,
			outModes: {
				default: 'out',
			},
			random: false,
			speed: 1.3,
			straight: false,
		},
		number: {
			density: {
				enable: true,
				area: 800,
			},
			value: 35,
		},
		opacity: {
			value: 0.4,
		},
		shape: {
			type: 'circle',
		},
		size: {
			value: {
				min: 2,
				max: 7,
			},
		},
	},
	detectRetina: true,
} satisfies ISourceOptions;
