import { useTranslation } from '../i18n';
import SwitcherClient from './switcherClient'; // Import the client component
import { lngProps } from './header';
async function Switcher({ lng }: lngProps) {
	const { t } = await useTranslation(lng, 'appbar');

	return <SwitcherClient lng={lng} />;
}

export default Switcher;
