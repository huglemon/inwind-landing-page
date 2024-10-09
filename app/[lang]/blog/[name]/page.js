import { IoMdHome } from 'react-icons/io';
import { defaultLocale, getDictionary } from '@/lib/i18n';
import pubfn from '@/lib/function';
import HTMLReactParser from 'html-react-parser';
import Sidebar from '@/components/blog/sidebar';

import { notFound } from 'next/navigation';
import blog from '@/locales/blog/blog.json';

// You can actually just send lang when you fetch content from the back-end
import { SiteConfig } from '@/lib/config/site';
export async function generateMetadata({ params, searchParams }) {
	const langName = params.lang || defaultLocale;

	let langSiteConfig = SiteConfig[langName];

	const article = blog[langName];

	let keywords = article.tagList.map((item) => {
		return item.name;
	});

	let openGraphConfig = langSiteConfig.openGraph;
	openGraphConfig.title = article.name;
	openGraphConfig.description = article.description;

	let twitterConfig = langSiteConfig.twitter;
	twitterConfig.title = article.name;
	twitterConfig.description = article.description;

	return {
		title: article.name + ' - ' + langSiteConfig.name,
		description: article.description,
		keywords: keywords,
		metadataBase: langSiteConfig.metadataBase,
		openGraph: openGraphConfig,
		twitter: twitterConfig,
	};
}

export default async function page({ params }) {
	const langName = params.lang || defaultLocale;
	const dict = await getDictionary(langName); // 获取内容

	const article = blog[langName];
	if (pubfn.isNull(article)) {
		notFound();
	}
	return (
		<main className='container mx-auto md:px-5'>
			<div className='hidden md:block absolute left-[5%] top-[10%] z-0'>
				<div className='absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,theme(colors.primary/15%),rgba(255,255,255,0))]'></div>
			</div>
			<div className='breadcrumbs text-sm relative z-10'>
				<ul>
					<li>
						<a href={`/${params.lang}`}>
							<IoMdHome />
						</a>
					</li>
					<li>
						<a href={`/${params.lang}/blog`}>{dict['Blog']['title']}</a>
					</li>
					<li>
						<a href={`/${params.lang}/blog/{article.url_name}`}>{article.name}</a>
					</li>
				</ul>
			</div>
			<section className='relative flex flex-col md:flex-row items-start justify-between gap-5 py-5 min-h-[70vh] z-10'>
				<div className='w-full md:w-2/3 ring-2 ring-base-content/10 p-5 md:p-10 rounded-2xl bg-base-100'>
					<h1 className='mb-3 text-xl md:text-2xl font-bold text-center'>{article.name}</h1>
					<div className='flex flex-col md:flex-row justify-between items-end md:items-center text-base-content/60 text-sm'>
						<div>
							<span className='mr-3'>{article.category_name}</span>
							<span>{pubfn.timeFormat(article.create_time)}</span>
						</div>
						<div className='flex gap-x-2'>
							{article.tagList &&
								article.tagList.map((item, index) => {
									return <span key={index}>{item.name}</span>;
								})}
						</div>
					</div>
					<div className='divider'></div>
					{/* 富文本内容 */}
					<div className='prose'>{HTMLReactParser(article.content)}</div>
				</div>
				<div className='w-full md:w-1/3 '>
					<Sidebar description={article.description} langName={langName} />
				</div>
			</section>
		</main>
	);
}
