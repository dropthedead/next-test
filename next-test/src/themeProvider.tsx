'use client';

import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

export default function ThemeClient({
	children,
}: {
	children: React.ReactNode;
}) {
	return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
}
