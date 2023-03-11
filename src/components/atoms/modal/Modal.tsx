import {
	Root,
	Trigger,
	Portal,
	Overlay,
	Content,
	Title,
	Close,
	Description,
} from '@radix-ui/react-dialog';
import { useModal } from './useModal';
import Image from 'next/image';
import type { ReactNode } from 'react';

type ModalProps = {
	title: string;
	children: ReactNode;
};

export const Modal = ({ title, children }: ModalProps) => {
	const { isActive, open, close } = useModal();

	return (
		<Root open={isActive}>
			<Trigger className="fixed z-10 bottom-7 left-5" onClick={open}>
				<Image width="32" height="32" src="/img/icons/settings.svg" alt="" />
			</Trigger>

			<Portal>
				<Overlay
					className="w-screen h-screen fixed top-0 left-0 bg-black/60"
					onClick={close}
				/>

				<Content className="bg-gray-900 rounded-lg p-7 shadow-xl max-h-[85vh] w-[90vw] max-w-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					<div className="w-full flex justify-between">
						<Title className="text-xl font-medium">{title}</Title>
						<Close className="ml-full" onClick={close}>
							<Image width="20" height="20" src="/img/icons/cross.svg" alt="" />
						</Close>
					</div>

					<Description asChild className="mt-8">
						{children}
					</Description>
				</Content>
			</Portal>
		</Root>
	);
};
