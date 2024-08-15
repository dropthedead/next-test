import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from '../components/header';
import StoreProvider from '../StoreProvider';
import ThemeClient from '../../themeProvider';
import { dir } from 'i18next';
import { languages } from '../i18n/settings';
const inter = Montserrat({ subsets: ['latin'] });

export async function generateStaticParams() {
	return languages.map((lng) => ({ lng }));
}
export const metadata: Metadata = {
	title: 'Next Test',
	description: 'Generated by create next app',
};

interface RootLayoutProps {
	children: React.ReactNode;
	params: {
		lng: string;
	};
}

function RootLayout({ children, params: { lng } }: RootLayoutProps) {
	return (
		<html lang={lng} dir={dir(lng)}>
			<head />
			<StoreProvider>
				<ThemeClient>
					<body className={inter.className}>
						<Header lng={lng} />
						{children}
					</body>
				</ThemeClient>
			</StoreProvider>
		</html>
	);
}

export default RootLayout;
