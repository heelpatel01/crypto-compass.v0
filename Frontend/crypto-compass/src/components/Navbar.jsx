import React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import logoImage from "../assets/Crypto-Compass-Logo.png";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
 const [home, setHome] = useState(true);
 const [portfolio, setPortfolio] = useState(false);
 const [coins, setCoint] = useState([]);

 const pages = ["Home", "Portfolio", "Blogs"];
 const settings = ["login", "profile"];

 // mui
 const [anchorElNav, setAnchorElNav] = useState(null);
 const [anchorElUser, setAnchorElUser] = useState(null);

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

 return (
  <div>
   <AppBar position="static" sx={{ backgroundColor: "red", color: "white" }}>
    <Container maxWidth="xl">
     <Toolbar disableGutters>
      {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
      {/* //logo */}

      <Typography
       variant="h6"
       noWrap
       component="a"
       sx={{
        mr: 2,
        display: { xs: "none", md: "flex" },
        fontWeight: 700,
        fontFamily: "unset",
        color: "inherit",
        textDecoration: "none",
       }}
      >
       CRYPTO COMPASS
      </Typography>

      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
         vertical: "bottom",
         horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
         vertical: "top",
         horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
         display: { xs: "block", md: "none" },
        }}
       >
        <MenuItem key="Home" onClick={handleCloseNavMenu}>
         <Typography textAlign="center">
          <NavLink to="/">Home</NavLink>
         </Typography>
        </MenuItem>

        <MenuItem key="Exchange" onClick={handleCloseNavMenu}>
         <Typography textAlign="center">
          <NavLink to="/exchange">Exchange</NavLink>
         </Typography>
        </MenuItem>

        <MenuItem key="Portfolio" onClick={handleCloseNavMenu}>
         <Typography textAlign="center">
          <NavLink to="/portfolio">Portfolio</NavLink>
         </Typography>
        </MenuItem>

        <MenuItem key="Login" onClick={handleCloseNavMenu}>
         <Typography textAlign="center">
          <NavLink to="/login">Login</NavLink>
         </Typography>
        </MenuItem>
       </Menu>
      </Box>
      {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
      <Typography
       variant="h5"
       noWrap
       component="a"
       sx={{
        mr: 2,
        display: { xs: "flex", md: "none" },
        flexGrow: 1,
        fontFamily: "unset",
        fontWeight: 700,
        color: "inherit",
        textDecoration: "none",
       }}
      >
       CRYPTO COMPASS
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
       {/* {pages.map((page) => (
        <Button
         key={page}
         onClick={handleCloseNavMenu}
         sx={{ my: 2, color: "white", display: "block" }}
        >
        <NavLink>
        {page}
        </NavLink>
         
        </Button> */}

       <Button onClick={handleCloseNavMenu}>
        <NavLink to="/" activeClassName="Active" className={()=>{}}>
         Home
        </NavLink>
       </Button>

       <Button onClick={handleCloseNavMenu}>
        <NavLink
         to="/exchange"
         activeClassName="Active"
         className={"NavButtons"}
        >
         Exchange
        </NavLink>
       </Button>

       <Button onClick={handleCloseNavMenu}>
        <NavLink
         to="/portfolio"
         activeClassName="Active"
         className={"NavButtons"}
        >
         Portfolio
        </NavLink>
       </Button>

       <Button onClick={handleCloseNavMenu}>
        <NavLink to="/login" activeClassName="Active" className={"NavButtons"}>
         Login
        </NavLink>
       </Button>
      </Box>

      <Box sx={{ flexGrow: 0 }}>
       <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
         <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
       </Tooltip>
       <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
         vertical: "top",
         horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
         vertical: "top",
         horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
       >
        {settings.map((setting) => (
         <MenuItem key={setting} onClick={handleCloseUserMenu}>
          <Typography textAlign="center">{setting}</Typography>
         </MenuItem>
        ))}
       </Menu>
      </Box>
     </Toolbar>
    </Container>
   </AppBar>
  </div>
 );
}

export default Navbar;
