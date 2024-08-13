'use client';
import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';
import { languages } from '../i18n/settings';
import { useTranslation } from '../i18n';
import { Box } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';

function Switcher({ lng }) {
	const { t } = useTranslation(lng, 'appbar');
	const pathname = usePathname();
	const router = useRouter();

	const changeLanguage = (newLng) => {
		const newPathname = pathname.replace(/^\/[a-z]{2}/, `/${newLng}`);
		router.push(newPathname);
	};

	return (
		<Box style={{ marginTop: 50 }}>
			<Trans i18nKey="languageSwitcher" t={t}>
				Switch from <strong>{{ lng }}</strong> to:{' '}
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

export default Switcher;
