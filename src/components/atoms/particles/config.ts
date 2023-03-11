import type { ISourceOptions } from 'tsparticles-engine';

export const config = {
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
			value: { min: 2, max: 7 },
		},
	},
	detectRetina: true,
} as const satisfies ISourceOptions;
