import { defaultLocale, localeNames } from '@/lib/i18n';

/**
 * reportLanguage 根据请求路径报告本地化语言
 * @param {*} pathname 
 * @returns 
 */
export const reportLanguage = (pathname) => {
	if (pathname === '' || pathname === '/') {
		return defaultLocale
	}
	const paths = pathname.split('/')
	if (paths.length < 2) {
		return defaultLocale
	}
	if (localeNames[paths[1]]) {
		return paths[1]
	}
	return defaultLocale
}