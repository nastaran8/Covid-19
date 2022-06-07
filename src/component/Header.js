import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search'; 
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MoreIcon from '@mui/icons-material/MoreVert';
import React, { useState } from 'react';
import { makeStyles, MenuList } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "#ffffff",
    color: "black",
    boxShadow: "0px 0px 0px 0px"
  },
  badge : {
    border: "1px solid red",
  },

  header :{
    zIndex:1,
    position:"relative"
  },
  menu: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  }
}));

 

 

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
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
      <MenuItem onClick={handleMenuClose}>Dashboards</MenuItem>
      <MenuItem onClick={handleMenuClose}>Countries</MenuItem>
      <MenuItem onClick={handleMenuClose}>Contagion</MenuItem>
      <MenuItem onClick={handleMenuClose}>Reports</MenuItem>
      <MenuItem onClick={handleMenuClose}>Prevantion</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 3 new notifications"
          sx={{backgroundColor:"rgb(241,242,250)",color:"rgb(203,206,243)"}}
        >
          <Badge badgeContent={3} color="default">
            <NotificationsNoneIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      
    </Menu>
  );

  const classes = useStyles();

  return (
    <div className={classes.header} style={{zIndex:1,position:"relative"}}>
      <AppBar position="static" sx={{backgroundColor:"#ffffff",borderRadius:"20px 20px 0 0", color:"rgb(136,134,151)"}}>
        <Toolbar>
          <img src="./img/coronavirusL.png" alt="Covid Logo"  
            style={{ width: '40px', height: '40px',marginRight:"10px" }} />
                <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' ,color:"black"} }}
          >
          Covid-<span  style={{ color:"rgb(133,49,255)" }}>19</span>
          </Typography>

<div className={classes.menu}>
          <MenuList variant='selectedMenu' style={{ display: 'flex'}}>
      <MenuItem>Dashboards</MenuItem>
      <MenuItem>Countries</MenuItem>
      <MenuItem>Contagion</MenuItem>
      <MenuItem>Reports</MenuItem>
      <MenuItem >Prevantion</MenuItem>
    </MenuList>
    </div>

        
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
             sx={{ mr: 2 , display: { xs: 'flex', md: 'none' } }}
             onClick={handleProfileMenuOpen}
          >
            <MenuIcon />
          </IconButton>
      
          
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            
          <IconButton size="large" aria-label="show 4 new mails" color="inherit" 
          sx={{backgroundColor:"rgb(241,242,250)",color:"rgb(203,206,243)"}}>
              <Badge>
                <SearchIcon />
              </Badge>
            </IconButton>
            

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              sx={{backgroundColor:"rgb(241,242,250)",color:"rgb(203,206,243)"}}
            >
              <Badge badgeContent={3} color="default">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}


export default Header;