// next.config.js
const { i18n } = require('./src/i18n.config'); // Если файл в папке src
// const { i18n } = require('./i18n.config'); // Если файл в корне проекта

module.exports = {
	i18n,
	reactStrictMode: true,
};
// /**
//  * @type {import('next').NextConfig}
//  **/
// module.exports = {
// 	i18n: {
// 		defaultLocale: 'en',
// 		locales: ['en', 'ru'],
// 	},
// 	reactStrictMode: true,
// };
