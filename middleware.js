import { locales } from './lib/i18n';
import { NextRequest } from 'next/server';

export function middleware(request) {
	const { pathname } = request.nextUrl;

	const isExit = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

	if (isExit) return;

	request.nextUrl.pathname = `/`;
	return Response.redirect(request.nextUrl);
}

export const config = {
	matcher: ['/((?!_next)(?!.*\\.(?:ico|png|gif|svg|jpg|jpeg|xml|txt|mp4)$)(?!/api).*)'],
};