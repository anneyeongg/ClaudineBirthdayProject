import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom'; // Import with an alias if using MUI's Link too
import './App.css';
import { Container, AppBar, Toolbar, Typography, Menu, MenuItem, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Favourites from './pages/Favourites';
import Messages from './pages/Messages';

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppBar position="static" className='AppBar' sx={{ backgroundColor: 'navy' }}>
          <Container>
            <Toolbar disableGutters={true}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="body" component="div" sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold' }}>
                <RouterLink to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
                  BONG
                </RouterLink>
              </Typography>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} variant='body' sx={{ fontWeight: 'bold' }}><Link className="MenuLink" to="/home">Home</Link></MenuItem>
                <MenuItem onClick={handleClose} variant='body' sx={{ fontWeight: 'bold' }}><Link className="MenuLink" to="/about">About Claudine</Link></MenuItem>
                <MenuItem onClick={handleClose} variant='body' sx={{ fontWeight: 'bold' }}><Link className="MenuLink" to="/favourites">Favourites</Link></MenuItem>
                <MenuItem onClick={handleClose} variant='body' sx={{ fontWeight: 'bold' }}><Link className="MenuLink" to="/messages">Messages</Link></MenuItem>
              </Menu>
            </Toolbar>
          </Container>
        </AppBar>
        <Container component="main" style={{ flex: 1 }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </Container>
        {/* Footer */}
        <Box component="footer" sx={{ bgcolor: 'navy', color: 'white', py: 2, width: '100%' }}>
          <Container maxWidth="lg">
            <Typography variant="body" align="left" component="p">
              <RouterLink to="/home" style={{ textDecoration: 'none', color: 'white' }}>
                🐷
              </RouterLink>
              <br></br>
              <RouterLink to="/about" style={{ textDecoration: 'none', color: 'white' }}>
                About Claudine
              </RouterLink>
              <br />
              <RouterLink to="/favourites" style={{ textDecoration: 'none', color: 'white' }}>
                Favourites
              </RouterLink>
              <br />
              <RouterLink to="/messages" style={{ textDecoration: 'none', color: 'white' }}>
                Messages
              </RouterLink>
              <br></br>
              <br></br>
            </Typography>
            <Typography variant="body" align="left" component="p" style={{ fontWeight: 'bold' }}>
              ⚲ Singapore
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <Typography variant="body" component="p">
                © {new Date().getFullYear()} bongbong. All rights reserved.
              </Typography>
              <Typography variant="body" component="p" sx={{ fontWeight: 'bold' }}>
                BONG
              </Typography>
            </Box>

          </Container>
        </Box>
      </div>
    </Router>
  );
}

export default App;
