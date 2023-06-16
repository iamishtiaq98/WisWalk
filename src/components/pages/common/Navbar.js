import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import './Navbar.css'
import { styled } from '@mui/material/styles';
import Logo from '../../assets/logo/Group 18.png'
import { Link } from '@mui/material';
import { motion, AnimatePresence } from "framer-motion";

const LogoImage = styled('img')({
    height: '40px',
    marginRight: '16px',
});



function Navbar() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const [isColumn, setIsColumn] = useState(window.innerWidth <= 715);


    return (
            <AppBar position="static" className='appbar' >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <LogoImage className='App-logo' src={Logo} sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} />

                        <Box sx={{  display: { xs: 'flex', md: 'none' } }}>
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
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                keepMounted
                                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: 'block', md: 'none' } }} >

                                <MenuItem className='menu-link'><Typography textAlign="center">Home</Typography></MenuItem>
                                <MenuItem className='menu-link'><Typography textAlign="center">Train with Caser</Typography></MenuItem>
                                <MenuItem className='menu-link'><Typography textAlign="center">Dog Training</Typography></MenuItem>
                                <MenuItem className='menu-link'><Typography textAlign="center">About</Typography></MenuItem>
                                <MenuItem className='menu-link'><Typography textAlign="center">Shop</Typography></MenuItem>
                                <MenuItem className='menu-link'><Typography textAlign="center">Contact</Typography></MenuItem>
                            </Menu>
                        </Box>

                        <LogoImage src={Logo} sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }} />

                        <Box className='navbar_items' sx={{ justifyContent: 'center', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Link href='' className='menu-link' sx={{ my: 2, color: 'Black', display: 'block' }} >Home </Link>
                            <Link href='' className='menu-link' sx={{ my: 2, color: 'Black', display: 'block' }} >Train with Caser</Link>
                            <Link href='' className='menu-link' sx={{ my: 2, color: 'Black', display: 'block' }} >Dog Training</Link>
                            <Link href='' className='menu-link' sx={{ my: 2, color: 'Black', display: 'block' }} >About</Link>
                            <Link href='' className='menu-link' sx={{ my: 2, color: 'Black', display: 'block' }} >Shop</Link>
                            <Link href='' className='menu-link' sx={{ my: 2, color: 'Black', display: 'block' }} >Contact</Link>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
    );
}
export default Navbar;