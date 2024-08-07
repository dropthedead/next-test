'use server';
import Link from 'next/link';
import styles from './mainpage.module.scss';

export default async function MainPage() {
	return (
		<>
			<header>
				<Link className={styles.link} href="/">
					('title')
				</Link>
			</header>

			<div>12345</div>
		</>
	);
}
