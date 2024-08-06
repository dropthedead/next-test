'use server';
import Link from 'next/link';
import styles from './mainpage.module.scss';
import { useTranslations } from 'next-intl';

export default async function MainPage() {
	// const t = useTranslations('HomePage');
	return (
		<>
			<header>
				<Link className={styles.link} href="/">
					{/* {t('title')} */}
				</Link>
			</header>

			<div>12345</div>
		</>
	);
}
