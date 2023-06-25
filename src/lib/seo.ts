import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'rasyid ─ developer';
	const description = "Some random thoughts about web development, programming, and other things I'm interested in.";

	return {
		title,
		description,
		canonical: `https://rasyid.dev/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'rasyid',
			url: `https://rasyid.dev/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://rasyid.dev/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@rasyidf_',
			site: '@rasyidf_',
		},
		...props,
	};
}
