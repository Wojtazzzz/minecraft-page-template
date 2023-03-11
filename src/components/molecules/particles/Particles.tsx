'use client';

import { Particles as ReactParticles } from 'react-particles';
import { useParticles } from './useParticles';
import { useParticlesConfig } from './useParticlesConfig';
import { Modal } from '../../atoms/modal/Modal';
import { Button } from '@/components/atoms/Button';

export const Particles = () => {
	const {
		config,
		speed,
		changeSpeed,
		quantity,
		changeQuantity,
		size,
		changeSize,
		opacity,
		changeOpacity,
		resetToDefaults,
	} = useParticlesConfig();
	const { init } = useParticles();

	return (
		<>
			<Modal title="Edycja Cząsteczek">
				<div className="flex flex-col gap-3">
					<label className="block mb-2">
						<span className="text-sm font-medium text-white">Szybkość</span>
						<input
							type="range"
							value={String(speed)}
							step="0.1"
							min="0.1"
							max="10"
							className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700"
							onChange={changeSpeed}
						/>
					</label>

					<label className="block mb-2">
						<span className="text-sm font-medium text-white">Ilość</span>
						<input
							type="range"
							value={String(quantity)}
							step="1"
							min="0"
							max="100"
							className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700"
							onChange={changeQuantity}
						/>
					</label>

					<label className="block mb-2">
						<span className="text-sm font-medium text-white">Wielkość</span>
						<input
							type="range"
							value={String(size)}
							step="1"
							min="0"
							max="50"
							className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700"
							onChange={changeSize}
						/>
					</label>

					<label className="block mb-2">
						<span className="text-sm font-medium text-white">Przezroczystość</span>
						<input
							type="range"
							value={String(opacity)}
							step="0.1"
							min="0"
							max="1"
							className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700"
							onChange={changeOpacity}
						/>
					</label>

					<Button type="button" callback={resetToDefaults}>
						Reset
					</Button>
				</div>
			</Modal>

			<ReactParticles
				id="tsparticles"
				init={init}
				options={config}
				className="absolute z-0 pointer-events-none top-0 left-0 w-screen h-screen"
			/>
		</>
	);
};
