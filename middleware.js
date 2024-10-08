import { reportLanguage } from './lib/function/lang';
import { locales } from './lib/i18n';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request) {
	const { pathname } = request.nextUrl;

	const lang = reportLanguage(pathname)
	request.headers.set('x-pathname', pathname)
	request.headers.set('x-language-directory', lang)
	const response = NextResponse.next({
		request: {
			headers: request.headers,  //  put your headers here
		},
	});

	const isExit = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

	if (isExit) return response;

	request.nextUrl.pathname = `/`;
	return Response.redirect(request.nextUrl);
}

export const config = {
	matcher: ['/((?!_next)(?!.*\\.(?:ico|png|gif|svg|jpg|jpeg|xml|txt|mp4)$)(?!/api).*)'],
};