import Link from 'next/link';
import styles from './mainpage.module.scss';

import { useTranslation } from '../../i18n/index';

export default async function MainPage({ params: { lng } }) {
	const { t } = await useTranslation(lng);

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
