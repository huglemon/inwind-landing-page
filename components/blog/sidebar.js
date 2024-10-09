import { RiChatHistoryFill } from 'react-icons/ri';
import { FaHotjar } from 'react-icons/fa';
import { BsChatRightQuoteFill } from 'react-icons/bs';
import BlogList from '@/locales/blog/list.json';
import { defaultLocale, getDictionary } from '@/lib/i18n';
import pubfn from '@/lib/function';
export default async function Sidebar({ langName = 'en', description }) {
	const dict = await getDictionary(langName);
	const list = BlogList[langName];
	const extendedList = Array.from({ length: 9 }, () => list[0]);
	return (
		<>
			<div className='ring-2 ring-base-content/10 p-5 md:p-10 rounded-2xl bg-base-100 mb-5'>
				<div className='flex items-center justify-between'>
					<h2 className='text-xl font-bold'>{dict['Blog']['side1']}</h2>
					<BsChatRightQuoteFill size={24} />
				</div>
				<div className='divider'></div>
				<p className='text-base-content/80'>{description}</p>
			</div>
			<div className='ring-2 ring-base-content/10 p-5 md:p-10 rounded-2xl bg-base-100 mb-5'>
				<div className='flex items-center justify-between'>
					<h2 className='text-xl font-bold'>{dict['Blog']['side2']}</h2>
					<FaHotjar size={24} />
				</div>
				<div className='divider'></div>
				<ul className='flex flex-col gap-y-3'>
					{extendedList.map((item, index) => (
						<li
							key={index}
							className='flex items-center justify-between'
						>
							<a
								className='w-10/12 line-clamp-1 hover:text-primary'
								href={`/${langName}/blog/${item.url_name}`}
								alt={item.name}
								title={item.name}
							>
								{item.name}
								{item.name}
								{item.name}
								{item.name}
								{index}
							</a>
							<span className='text-base-content/80'>{pubfn.timeFormat(item.create_time, 'MM-dd')}</span>
						</li>
					))}
				</ul>
			</div>
			<div className='ring-2 ring-base-content/10 p-5 md:p-10 rounded-2xl bg-base-100 mb-5'>
				<div className='flex items-center justify-between'>
					<h2 className='text-xl font-bold'>{dict['Blog']['side3']}</h2>
					<RiChatHistoryFill size={24} />
				</div>
				<div className='divider'></div>
				<ul className='flex flex-col gap-y-3'>
					{extendedList.map((item, index) => (
						<li
							key={index}
							className='flex items-center justify-between'
						>
							<a
								className='w-10/12 line-clamp-1 hover:text-primary'
								href={`/${langName}/blog/${item.url_name}`}
								alt={item.name}
								title={item.name}
							>
								{item.name}
								{item.name}
								{item.name}
								{item.name}
								{index}
							</a>
							<span className='text-base-content/80'>{pubfn.timeFormat(item.create_time, 'MM-dd')}</span>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
