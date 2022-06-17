import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Search, StyledInputBase, SearchIconWrapper } from '../Customstyles/CustomStyles';
import { Fab, Tooltip, useScrollTrigger, Zoom } from '@mui/material';
import NavigationIcon from "@mui/icons-material/Navigation";

const Navbar: React.FC = () => {
  const trigger = useScrollTrigger();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      "#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Food Bank
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      {/* Scroll to top */}
      <Toolbar id="back-to-top-anchor" />
      <Zoom in={trigger}>
        <Tooltip
          onClick={handleClick}
          role="presentation"
          sx={{ position: "fixed", bottom: 16, right: 16 }}
          title="Scroll to Top"
          arrow
          placement="left"
        >
          <Fab color="secondary" size="small" className="scroll-to-top">
            <NavigationIcon className="icon" />
          </Fab>
        </Tooltip>
      </Zoom>
    </Box>
  );
};

export default Navbar;