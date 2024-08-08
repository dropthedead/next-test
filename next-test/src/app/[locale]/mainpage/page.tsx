'use client'; // Используем 'use client' для клиентских компонентов
import Link from 'next/link';
import styles from './mainpage.module.scss';

import { useTranslation } from 'next-i18next';

export default function MainPage() {
	const { t } = useTranslation();

	return (
		<>
			<header>
				<Link className={styles.link} href="/">
					{t('Mainpage.title')}
				</Link>
			</header>
			<div>12345</div>
		</>
	);
}
