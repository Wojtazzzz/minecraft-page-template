import Image from 'next/image';
import { CopyIpButton } from '../../molecules/copyIpButton/CopyIpButton';

export const Hero = () => {
	return (
		<section className="flex justify-center md:justify-between items-center my-6 md:my-8 lg:my-10 xl:my-12">
			<div className="space-y-5 text-center md:text-left">
				<hgroup className="space-y-5">
					<h2 className="flex flex-col md:gap-1.5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold">
						<span>Rozgrywka jakiej</span>
						<span className="text-primary">Jeszcze</span>
						<span>Nie widziałeś</span>
					</h2>

					<p className="text-gray-400 font-medium max-w-lg text-xs">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur quis nobis
						reiciendis error, ipsam libero a maiores reprehenderit
					</p>
				</hgroup>

				<CopyIpButton />
			</div>

			<div className="hidden md:block">
				<Image
					width="500"
					height="0"
					src="/img/hero-render.png"
					alt=""
					aria-hidden="true"
					className="w-[350px] md:w-[420px] lg:w-[500px] xl:w-[550px]"
				/>
			</div>
		</section>
	);
};
