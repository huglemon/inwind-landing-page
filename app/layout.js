import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { headers } from "next/headers"

import { SiteConfig } from '@/lib/config/site';
import CustomHead from '@/components/common/head';
import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';
import ThemeScript from '@/components/common/themeScript';

const jakarta = Plus_Jakarta_Sans({
	weight: ['500', '800'],
	subsets: ['latin'],
});

//@doc https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export async function generateMetadata({ params, searchParams }) {
	//@see issue https://github.com/vercel/next.js/discussions/50189
	const headersList = headers()
	const lang = headersList.get('x-language-directory') ? headersList.get('x-language-directory') : 'en'

	return {
		title: SiteConfig[lang].name,
		description: SiteConfig[lang].description,
		keywords: SiteConfig[lang].keywords,
		authors: SiteConfig[lang].authors,
		creator: SiteConfig[lang].creator,
		icons: SiteConfig[lang].icons,
		metadataBase: SiteConfig[lang].metadataBase,
		openGraph: SiteConfig[lang].openGraph,
		twitter: SiteConfig[lang].twitter,
	}
}

export default async function RootLayout({ children }) {
	return (
		<html lang="en" className={jakarta.className}>
			<head>
				<CustomHead />
			</head>
			<body>
				<ThemeScript />
				<div className='w-full min-h-svh text-base-content bg-base-100'>
					<Navbar />
					<div className='px-5'>{children}</div>
					<Footer />
				</div>
			</body>
		</html>
	);
}
