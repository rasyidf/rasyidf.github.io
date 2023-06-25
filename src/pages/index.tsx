import dynamic from 'next/dynamic';
import { Icon } from '@iconify/react';

import { Animate, Button, Pill } from '~/components';
import { EventType, NavigationItemType } from '~/types';
import { Layout } from '~/layouts';

import type { EventProps } from '~/components/Event.component';
import type { NavigationItem } from '~/types';
import SvgMascot from '~/components/Mascot.component';

const Event = dynamic<EventProps>(
	() => import('~/components/Event.component').then(({ Event }) => Event),
	{
		ssr: false,
	},
);

const ACTIONS: Array<NavigationItem> = [
	{
		type: NavigationItemType.LINK,
		href: '/blog',
		icon: <Icon className="mr-3" icon="feather:edit-3" />,
		text: 'Blog',
	},
	{
		type: NavigationItemType.LINK,
		href: '/projects',
		icon: <Icon className="mr-3" icon="feather:copy" />,
		text: 'Projects',
	},
	{
		type: NavigationItemType.LINK,
		external: true,
		href: 'https://github.com/rasyidf',
		icon: <Icon className="mr-3" icon="feather:github" />,
		text: 'GitHub',
	},
];

export default function HomePage(): JSX.Element {
	const today = new Date();
	const birthday = new Date('1999-04-23');
	const isBirthday =
		today.getDate() === birthday.getDate() && today.getMonth() === birthday.getMonth();

	const tagline = `Open source enthusiast, and a huge fan of TypeScript. Frontend Engineer at Telkom Indonesia`;

	return (
		<Layout.Default>
			{isBirthday && <Event event={EventType.BIRTHDAY} />}
			<div className="min-h-screen flex items-center justify-center py-12">
				<div className="max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl w-full space-y-8  ">
					<div className="flex flex-col md:flex-row ">
						<div className="w-full md:w-4/6 lg:xl:2xl:w-4/6">
							<Animate
								as="h1"
								animation={{
									opacity: [0, 1],
									scale: [0.75, 1],
								}}
								className="text-gray-500 dark:text-white text-5xl sm:text-6xl md:text-6xl lg:text-8xl tracking-tight font-extrabold"
							>
								Hello <span className="inline-block origin-70 hover:(animate-wave)">🐋</span> <br className="hidden sm:block" />
								I&apos;m Fahmi <span className="text-primary-200">Rasyid</span>, <br className="hidden sm:block" />
								a{' '}
								<Pill.Standard className="mt-4">developer</Pill.Standard>
							</Animate>
						</div>
						<div className="w-2/5 md:w-1/6 lg:xl:2xl:w-1/6 hidden md:block">
							<Animate
								as="div"
								animation={{
									opacity: [0, 1],
									scale: [0.75, 1],
								}}
								className=" md:w-[22rem]  md:h-[22rem] lg:w-[28rem]  lg:h-[28rem] xl:2xl:w-[32rem] xl:2xl:h-[32rem]"
							>
								<SvgMascot />
							</Animate>
						</div>
					</div>
					<Animate
						as="p"
						animation={{
							opacity: [0, 1],
							scale: [0.75, 1],
						}}
						className="max-w-xs mt-4 md:mt-8 mx-auto text-base text-gray-400 sm:text-lg md:text-xl md:max-w-3xl text-center"
						transition={{
							delay: 0.5,
						}}>
						{tagline}
					</Animate>

					<div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-4 sm:space-y-0 w-full mt-8 sm:mt-4">
						{ACTIONS.map((action, index) => {
							if (action.type !== NavigationItemType.LINK) return null;

							return (
								<Animate
									animation={{
										y: [50, 0],
										opacity: [0, 1],
									}}
									className="w-full sm:w-auto"
									key={index}
									transition={{
										delay: 0.1 * (index + 2) + 0.5,
									}}>
									<Button.Outline href={action.href}>
										{action.icon}
										<span>{action.text}</span>
									</Button.Outline>
								</Animate>
							);
						})}
					</div>
				</div>
			</div>
		</Layout.Default>
	);
}
