import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const options = {
	order: [
		'cookie',
		'cookie',
		'navigator',
		'querystring',
		'localStorage',
		'sessionStorage',
		'path',
		'subdomain',
	],
};
i18n
	// load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
	// learn more: https://github.com/i18next/i18next-http-backend
	// want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn

	// detect user language
	// learn more: https://github.com/i18next/i18next-browser-languageDetector
	.use(LanguageDetector)
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		detection: options,
		fallbackLng: 'en',
		debug: true,
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
		locales: ['en', 'ru'],
	});

export default i18n;
