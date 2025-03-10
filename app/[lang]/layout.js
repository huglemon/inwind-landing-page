import { locales, defaultLocale } from '@/lib/i18n';
import { SiteConfig } from '@/lib/config/site';
import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';

export async function generateMetadata({ params }) {
	const paramLang = params?.lang;
	console.log('获取到的语言参数:', paramLang);

	const lang = paramLang && locales.includes(paramLang) ? paramLang : defaultLocale;

	if (!SiteConfig[lang]) {
		console.error(`未找到语言配置: ${lang}`);
		return {
			title: SiteConfig[defaultLocale].name,
		};
	}

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
	};
}

export default function LangLayout({ children, params }) {
	// 获取当前语言
	const lang = params?.lang || defaultLocale;

	return (
		<>
			<Navbar lang={lang} />
			<div className='px-5'>{children}</div>
			<Footer lang={lang} />
		</>
	);
}
