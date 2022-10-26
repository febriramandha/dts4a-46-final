import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo_movie.png';

import SearchIcon from '@mui/icons-material/Search';
import RedeemIcon from '@mui/icons-material/Redeem';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { AppBar, Container, Button, Toolbar, Typography, Box, IconButton, Menu, MenuItem } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { keluarAplikasi } from "../authentication/firebase";

import { auth } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const AppNavBar = () => {
    const [user] = useAuthState(auth);
    // Gunakan hooks useNavigate
    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const buttonLogoutOnClickHandler = () => {
        keluarAplikasi();
        navigate("/login");
    };

    return (
        <>
            {/* NavBar */}
            <AppBar position="fixed" sx={{ backgroundColor: '#141414' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Avatar src={logo} alt="logo" sx={{ display: { xs: 'none', md: 'flex' }, mr: 30, ml: 5 }} />

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <Avatar
                                    src={logo}
                                    alt="logo"
                                    sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                                />
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
                                <Link to="/" style={{ textDecoration: "none" }}>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">Home</Typography>
                                    </MenuItem>
                                </Link>
                                <Link to="/list-series" style={{ textDecoration: "none" }}>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">Series</Typography>
                                    </MenuItem>
                                </Link>
                                <Link to="/" style={{ textDecoration: "none" }}>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">Movie</Typography>
                                    </MenuItem>
                                </Link>
                                <Link to="/new-populer" style={{ textDecoration: "none" }}>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">New and Popular</Typography>
                                    </MenuItem>
                                </Link>
                                <Link to="/my-list" style={{ textDecoration: "none" }}>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">My List</Typography>
                                    </MenuItem>
                                </Link>
                            </Menu>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <Button sx={{ my: 2, mx: 1, color: 'white', display: 'block' }}>
                                    Home
                                </Button>
                            </Link>
                            <Link to="/list-series" style={{ textDecoration: "none" }}>
                                <Button sx={{ my: 2, mx: 1, color: 'white', display: 'block' }}>
                                    Series
                                </Button>
                            </Link>
                            <Button sx={{ my: 2, mx: 1, color: 'white', display: 'block' }}>
                                Movie
                            </Button>
                            <Link to="/new-populer" style={{ textDecoration: "none" }}>
                                <Button sx={{ my: 2, mx: 1, color: 'white', display: 'block' }}>
                                    New and Popular
                                </Button>
                            </Link>
                            <Link to="/my-list" style={{ textDecoration: "none" }}>
                                <Button sx={{ my: 2, mx: 1, color: 'white', display: 'block' }}>
                                    My List
                                </Button>
                            </Link>
                        </Box>

                        <Box sx={{ flexGrow: 0, display: { md: 'flex' }, }}>
                            <SearchIcon sx={{ display: { xs: 'none', md: 'flex' }, my: 2, mx: 1 }} />
                            <RedeemIcon sx={{ display: { xs: 'none', md: 'flex' }, my: 2, mx: 2 }} />
                            <NotificationsActiveIcon sx={{ display: { xs: 'none', md: 'flex' }, my: 2, mx: 2 }} />
                        </Box>

                        <SearchIcon sx={{ display: { xs: 'flex', md: 'none' }, p: 0, color: 'red', my: 2, mx: 2 }} />
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, my: 2, mx: 2 }}>
                                    <Typography textAlign="center" sx={{ color: 'white' }}>
                                        User
                                    </Typography>
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
                                <MenuItem>
                                    <Typography textAlign="center">{user.email}</Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center" onClick={buttonLogoutOnClickHandler}>Logout</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {/* Akhir NavBar */}

        </>
    )
}

export default AppNavBar;