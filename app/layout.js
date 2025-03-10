import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import ThemeScript from '@/components/common/themeScript';

const jakarta = Plus_Jakarta_Sans({
	weight: ['500', '800'],
	subsets: ['latin'],
});

export default function RootLayout({ children }) {
	const fontClass = jakarta.className || ''  // 确保有默认值
	
	return (
		<html lang="en" className={fontClass}>
			<body>
				<ThemeScript />
				<div className='w-full min-h-svh text-base-content bg-base-100'>
					{children}
				</div>
			</body>
		</html>
	);
}
