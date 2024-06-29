import { TfiYoutube } from 'react-icons/tfi';
import { FaRedditAlien, FaTiktok, FaFacebook } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaXTwitter, FaSquareThreads, FaWeixin } from 'react-icons/fa6';
import { IoLogoWhatsapp } from 'react-icons/io';
import { RiWechatChannelsLine } from 'react-icons/ri';

const baseSiteConfig = {
	name: 'inWind Landing Page Template',
	description: 'This is a free, open-source and powerful landing page template for saas project, it will help you to make your startup faster.',
	url: 'https://landingpage.inwind.cn',
	ogImage: 'https://landingpage.inwind.cn/logo.png',
	metadataBase: '/',
	keywords: [
		'landing page template',
		'landing page boilerplate',
		'opensource landing page',
		'next.js landing page',
		'free landing page',
		'awesome landing page',
	],
	authors: [
		{
			name: 'hugLemon',
			url: 'https://huglemon.com',
		},
	],
	icons: {
		icon: '/favicon.ico',
		shortcut: '/logo.png',
		apple: '/logo.png',
	}
};

export const SiteConfig = {
	...baseSiteConfig,
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: baseSiteConfig.url,
		title: baseSiteConfig.name,
		description: baseSiteConfig.description,
		siteName: baseSiteConfig.name,
	},
	twitter: {
		card: 'summary_large_image',
		title: baseSiteConfig.name,
		description: baseSiteConfig.description,
		images: [`${baseSiteConfig.url}/og.png`],
		creator: baseSiteConfig.creator,
	},
};
