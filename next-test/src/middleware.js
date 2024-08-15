import { NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';
import { fallbackLng, languages, cookieName } from './app/i18n/settings';

acceptLanguage.languages(languages);

export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)',
	],
};

export function middleware(req) {
	let lng;
	if (req.cookies.has(cookieName)) {
		lng = acceptLanguage.get(req.cookies.get(cookieName).value);
	}
	if (!lng) {
		lng = acceptLanguage.get(req.headers.get('Accept-Language'));
	}
	if (!lng) {
		lng = fallbackLng;
	}

	// Redirect if lng in path is not supported
	if (
		!languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
		!req.nextUrl.pathname.startsWith('/_next')
	) {
		return NextResponse.redirect(
			new URL(
				`/${lng}${
					req.nextUrl.pathname !== '/' ? req.nextUrl.pathname : '/mainpage'
				}`,
				req.url
			)
		);
	}

	const response = NextResponse.next();
	response.cookies.set(cookieName, lng);
	return response;
}
