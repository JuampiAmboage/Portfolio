"use client"

import React from 'react';
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

const pages = [
  { name: 'Main', href: '#presentation' },
  { name: 'Knowledge', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Career', href: '#progress' },
  { name: 'Skills', href: '#resume' },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{
        background: "transparent",
        backdropFilter: 'blur(10px)',
        /*background: "linear-gradient(135deg, #1f4068 0%, #1b1b2f 100%)",*/
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 800,
              letterSpacing: '.2rem',
              color: '#ffffff',
              textDecoration: 'none',
              fontFamily: 'Roboto, sans-serif',
              fontSize: { xs: '1.25rem', md: '1.5rem' },
            }}
          >
            🌌 Welcome to My Land!
          </Typography>

          {/* Menú Hamburguesa para pantallas chicas */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },   background: "transparent", backdropFilter: 'blur(10px)', }}>
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
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <a href={page.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                      {page.name}
                    </a>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 800,
              letterSpacing: '.2rem',
              color: '#ffffff',
              textDecoration: 'none',
              fontFamily: 'Roboto, sans-serif',
              fontSize: { xs: '1.25rem', md: '1.5rem' },
            }}
          >
            🌌 Welcome to My Land!
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: { xs: '0.5rem', sm: '0.75rem', md: '1rem', lg: '1.25rem' } }}
              >
                <a href={page.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {page.name}
                </a>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;