'use client';
import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';
import { languages } from '../i18n/settings';
import { useTranslation } from '../i18n';
import { Box } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import { lngProps } from './header'; // Импортируем тип из файла types.ts
import { useEffect, useState } from 'react';

function SwitcherClient({ lng }: lngProps) {
	console.log('123:', lng);
	const [t, setT] = useState<any>(null);
	const pathname = usePathname();
	const router = useRouter();

	useEffect(() => {
		async function fetchTranslations() {
			const { t } = await useTranslation(lng, 'appbar');
			setT(t);
			console.log(t);
		}
		fetchTranslations();
	}, [lng]);

	const changeLanguage = (newLng: string) => {
		const newPathname = pathname.replace(/^\/[a-z]{2}/, `/${newLng}`);
		router.push(newPathname);
	};

	return (
		<Box style={{ marginTop: 50 }}>
			<Trans i18nKey='languageSwitcher' t={t}>
				Switch from <strong>{lng}</strong> to:{' '}
			</Trans>
			{languages
				.filter((l) => lng !== l)
				.map((l, index) => {
					return (
						<span key={l}>
							{index > 0 && ' or '}
							<Link
								href={pathname.replace(/^\/[a-z]{2}/, `/${l}`)}
								legacyBehavior
							>
								<a onClick={() => changeLanguage(l)}>{l}</a>
							</Link>
						</span>
					);
				})}
		</Box>
	);
}

export default SwitcherClient;
