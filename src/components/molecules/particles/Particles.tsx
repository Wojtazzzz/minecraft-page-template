'use client';

import { Particles as ReactParticles } from 'react-particles';
import { useParticles } from './useParticles';
import { useParticlesConfig } from './useParticlesConfig';
import { Modal } from '../../atoms/modal/Modal';
import { Button } from '@/components/atoms/Button';
import { InputRange } from '@/components/atoms/InputRange';

export const Particles = () => {
	const {
		config,
		speed,
		quantity,
		size,
		opacity,
		changeSpeed,
		changeQuantity,
		changeSize,
		changeOpacity,
		resetToDefaults,
	} = useParticlesConfig();
	const { init } = useParticles();

	return (
		<>
			<Modal title="Edycja Cząsteczek">
				<div className="flex flex-col gap-3">
					<InputRange
						label="Szybkość"
						value={String(speed)}
						step="0.1"
						min="0.1"
						max="10"
						onChange={changeSpeed}
					/>

					<InputRange
						label="Ilość"
						value={String(quantity)}
						step="1"
						min="0"
						max="100"
						onChange={changeQuantity}
					/>

					<InputRange
						label="Wielkość"
						value={String(size)}
						step="1"
						min="0"
						max="50"
						onChange={changeSize}
					/>

					<InputRange
						label="Przezroczystość"
						value={String(opacity)}
						step="0.1"
						min="0"
						max="1"
						onChange={changeOpacity}
					/>

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
