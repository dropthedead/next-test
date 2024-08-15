import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Switcher from './switcher';
import AppBarHeader from './appbar';

export interface lngProps {
	lng: string;
}
async function Header({ lng }: lngProps) {
	return (
		<AppBar position='static'>
			<AppBarHeader />
			<Switcher lng={lng} />
		</AppBar>
	);
}

export default Header;
