import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function Navbar() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const isMenuOpen = Boolean(anchorEl);

	const handleProfileMenuOpen = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem
				onClick={() => {
					location.href = '#';
				}}
			>
				Профиль
			</MenuItem>
			<MenuItem
				onClick={() => {
					window.location.href = '#';
				}}
			>
				Выйти
			</MenuItem>
		</Menu>
	);

	const logoTextStyle = { display: { xs: 'none', md: 'flex', fontSize: '20px', fontStyle: 'italic', paddingLeft: '10px', textDecoration: 'none', color: 'white', cursor: 'default' } };

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static' sx={{ paddingLeft: 3.5, paddingRight: 3.5, backgroundColor: '#1e1e1e' }}>
				<Toolbar>
					<Box component='a' href='#' variant='h4' noWrap sx={{ display: { xs: 'none', md: 'flex' } }}>
						<img src='../../../icons/logo.png' alt='' loading='lazy' />
					</Box>
					<Typography component='p' variant='h4' noWrap sx={logoTextStyle}>
						—
					</Typography>
					<Typography component='p' variant='h4' noWrap sx={logoTextStyle}>
						команда разработчиков
					</Typography>
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						<IconButton size='large' edge='end' aria-label='account of current user' aria-controls={menuId} aria-haspopup='true' onClick={handleProfileMenuOpen} color='inherit'>
							<AccountCircle />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
			{renderMenu}
		</Box>
	);
}
