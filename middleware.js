import { reportLanguage } from './lib/function/lang';
import { locales } from './lib/i18n';
import { NextRequest, NextResponse } from 'next/server';

const rewritePaths = [
    { pattern: /^\/$/, destination: '/en/' },
	{ pattern: /^\/about(\/)?$/, destination: '/en/about' },
    { pattern: /^\/blog(\/)?$/, destination: '/en/blog' },
    { pattern: /^\/blog\/([^\/]+)(\/)?$/, destination: '/en/blog/$1' },
    // 可以根据需要添加更多的重写规则
];

export function middleware(request) {
	const { pathname } = request.nextUrl;
	console.log("当前路径:", pathname);  // 保留日志

	const lang = reportLanguage(pathname);
	request.headers.set('x-pathname', pathname);
	request.headers.set('x-language-directory', lang);

	// 检查是否已经包含语言代码
	const isExit = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

	// 应用重写规则
	for (const { pattern, destination } of rewritePaths) {
		const match = pathname.match(pattern);
		if (match) {
			console.log(`重写路径: ${pathname} -> ${destination}`);  // 添加日志
			request.nextUrl.pathname = pathname.replace(pattern, destination);
			return NextResponse.rewrite(request.nextUrl);
		}
	}


	if (isExit) return NextResponse.next();

	// 如果没有匹配的重写规则，重定向到根路径
	console.log(`重定向到根路径: ${pathname} -> /`);  // 添加日志
	request.nextUrl.pathname = `/`;
	return NextResponse.redirect(request.nextUrl);
}

export const config = {
	matcher: ['/((?!_next)(?!.*\\.(?:ico|png|gif|svg|jpg|jpeg|xml|txt|mp4)$)(?!/api).*)'],
};
