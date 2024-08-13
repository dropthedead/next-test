import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Switcher from './switcher';
import AppBarHeader from './appbar';
import { languages } from '../i18n/settings';

async function Header() {
	return (
		<AppBar position="static">
			<AppBarHeader />
			<Switcher />
		</AppBar>
	);
}

export default Header;
