import { Navigation } from '@/components/organisms/Navigation';
import { Hero } from '@/components/organisms/hero/Hero';
import { Particles } from '@/components/atoms/particles/Particles';

export default function HomePage() {
	return (
		<div>
			<header className="container">
				<h1 className="sr-only">{process.env.NEXT_PUBLIC_SERVER_NAME}</h1>
				<Navigation />
				<Hero />
			</header>

			<Particles />
		</div>
	);
}
