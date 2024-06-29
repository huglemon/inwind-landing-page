'use client';
import { useParams, useRouter, usePathname } from 'next/navigation';
import { defaultLocale, localeNames } from '@/lib/i18n';

export default function LangSwitch() {
	const params = useParams();
	const lang = params.lang;
	const pathname = usePathname();
	const router = useRouter();

	let langName = lang && lang !== 'index' ? lang : defaultLocale;

	const handleSwitchLanguage = (value) => {
		return () => {
			let newPathname;
			if (pathname == '/') {
				newPathname = `/${value}`;
			} else {
				if (value === defaultLocale) {
					newPathname = '/';
				} else {
					newPathname = pathname.replace(`/${langName}`, `/${value}`);
				}
			}
			router.replace(newPathname);
		};
	};

	return (
		<div className='dropdown dropdown-end dropdown-hover z-[100]'>
			<div
				tabIndex={0}
				role='button'
				className='flex items-center justify-center md:bg-base-100 md:rounded-full w-15 md:w-[100px] h-5 text-sm md:h-8 md:shadow-sm md:hover:shadow-md transition-all'
			>
				{localeNames[langName]}
			</div>
			<ul
				tabIndex={0}
				className='dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow'
			>
				{Object.keys(localeNames).map((key) => {
					const name = localeNames[key];
					return (
						<li key={key}>
							<a
								href='#'
								title={`switch to ${name}`}
								className='cursor-pointer'
								onClick={handleSwitchLanguage(key)}
							>
								{name}
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
