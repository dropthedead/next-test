'use client';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../lib/store';
import { setFormData, clearFormData } from '../lib/formSlice';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';

const pages = {
	'Start Page': '/startpage',
	'Main Page': '/mainpage',
	Users: '/users',
};
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function AppBarHeader() {
	const formData = useSelector((state: RootState) => state.form.formData);
	const dispatch = useDispatch();

	React.useEffect(() => {
		const storedData = localStorage.getItem('userData');
		if (storedData) {
			dispatch(setFormData(JSON.parse(storedData)));
		}
	}, [dispatch]);

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	);
	const [showEmailTooltip, setShowEmailTooltip] = React.useState(false);
	const [showNameTooltip, setShowNameTooltip] = React.useState(false);

	const emailRef = React.useRef<HTMLSpanElement>(null);
	const nameRef = React.useRef<HTMLSpanElement>(null);

	React.useEffect(() => {
		if (emailRef.current && nameRef.current) {
			setShowEmailTooltip(
				emailRef.current.scrollWidth > emailRef.current.clientWidth
			);
			setShowNameTooltip(
				nameRef.current.scrollWidth > nameRef.current.clientWidth
			);
		}
	}, [formData]);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleLogout = () => {
		localStorage.removeItem('userData');
		dispatch(clearFormData());
		handleCloseUserMenu();
	};

	return (
		<Container maxWidth="xl">
			<Toolbar disableGutters>
				<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
				<Typography
					variant="h6"
					noWrap
					component="a"
					href="/"
					sx={{
						mr: 2,
						display: { xs: 'none', md: 'flex' },
						fontFamily: 'Monospace',
						fontWeight: 700,
						letterSpacing: '.3rem',
						color: 'inherit',
						textDecoration: 'none',
					}}
				>
					LOGO
				</Typography>

				<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
					<IconButton
						size="large"
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleOpenNavMenu}
						color="inherit"
					>
						<MenuIcon />
					</IconButton>
					<Menu
						id="menu-appbar"
						anchorEl={anchorElNav}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'left',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'left',
						}}
						open={Boolean(anchorElNav)}
						onClose={handleCloseNavMenu}
						sx={{
							display: { xs: 'block', md: 'none' },
						}}
					>
						{Object.keys(pages).map((page) => (
							<MenuItem key={page} onClick={handleCloseNavMenu}>
								<Link href={pages[page as keyof typeof pages]}>
									<Typography textAlign="center">{page}</Typography>
								</Link>
							</MenuItem>
						))}
					</Menu>
				</Box>

				<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
				<Typography
					variant="h5"
					noWrap
					component="a"
					href="/"
					sx={{
						mr: 2,
						display: { xs: 'flex', md: 'none' },
						flexGrow: 1,
						fontFamily: 'Monospace',
						fontWeight: 700,
						letterSpacing: '.3rem',
						color: 'inherit',
						textDecoration: 'none',
					}}
				>
					LOGO
				</Typography>
				<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
					{Object.keys(pages).map((page, index) => (
						<Link key={index} href={pages[page as keyof typeof pages]}>
							<Button
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								{page}
							</Button>
						</Link>
					))}
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: '10px',
						}}
					>
						{formData && formData.email ? (
							showEmailTooltip ? (
								<Tooltip title={formData.email}>
									<Typography
										ref={emailRef}
										noWrap
										maxWidth={100}
										style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
									>
										{formData.email}
									</Typography>
								</Tooltip>
							) : (
								<Typography
									ref={emailRef}
									noWrap
									maxWidth={100}
									style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
								>
									{formData.email}
								</Typography>
							)
						) : null}
						{formData && formData.name ? (
							showNameTooltip ? (
								<Tooltip title={formData.name}>
									<Typography
										ref={nameRef}
										noWrap
										maxWidth={100}
										style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
									>
										{formData.name}
									</Typography>
								</Tooltip>
							) : (
								<Typography
									ref={nameRef}
									noWrap
									maxWidth={100}
									style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
								>
									{formData.name}
								</Typography>
							)
						) : null}
					</Box>
				</Box>

				<Box sx={{ flexGrow: 0 }}>
					<Tooltip title="Open settings">
						<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
							<Avatar
								alt="Remy Sharp"
								src="https://mui.com/static/images/avatar/2.jpg"
							/>
						</IconButton>
					</Tooltip>
					<Menu
						sx={{ mt: '45px' }}
						id="menu-appbar"
						anchorEl={anchorElUser}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={Boolean(anchorElUser)}
						onClose={handleCloseUserMenu}
					>
						{settings.map((setting) => (
							<MenuItem
								key={setting}
								onClick={
									setting === 'Logout' ? handleLogout : handleCloseUserMenu
								}
							>
								<Typography textAlign="center">{setting}</Typography>
							</MenuItem>
						))}
					</Menu>
				</Box>
			</Toolbar>
		</Container>
	);
}
export default AppBarHeader;
