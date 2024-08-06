'use server';
import Link from 'next/link';
import styles from './mainpage.module.scss';
import { getTranslations } from 'next-intl/server';

export default async function MainPage() {
	const t = await getTranslations('MainPage');

	return (
		<>
			<header>
				<Link className={styles.link} href="/">
					{t('title')}
				</Link>
			</header>

			<div>12345</div>
		</>
	);
}
