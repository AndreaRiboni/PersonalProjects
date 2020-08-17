import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TextsmsIcon from '@material-ui/icons/Textsms';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import MovieIcon from '@material-ui/icons/Movie';
import BookIcon from '@material-ui/icons/Book';
import Link from '@material-ui/core/Link';

const BlackText = withStyles({
  root: {
    color: "#000000"
  }
})(Typography);

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: "#e39b96",
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function MenuAppBar() {
  return (
    <div id="NavbarContainer" style={{paddingTop: "60px"}}>
      <AppBar  style={{ backgroundColor: '#FFFFFF', position: 'fixed', top: 0}} maxHeight="60px">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <CustomizedMenus/>
          </IconButton>          
          <BlackText inline variant="h6">
            Static Homepage
          </BlackText>
        </Toolbar>
      </AppBar>
    </div>
  );
}

function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon style={{ color: "black" }} />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link href="#TESTO" style={{color: "black"}}>
          <StyledMenuItem onClick={handleClose}>
            <ListItemIcon>
              <TextsmsIcon/>
            </ListItemIcon>
            <ListItemText primary="Testo" />
          </StyledMenuItem>
        </Link>
        <Link href="#FOTO" style={{color: "black"}}>
          <StyledMenuItem onClick={handleClose}>
            <ListItemIcon>
              <PhotoSizeSelectActualIcon/>
            </ListItemIcon>
            <ListItemText primary="Foto" />
          </StyledMenuItem>
        </Link>
        <Link href="#VIDEO" style={{color: "black"}}>
          <StyledMenuItem onClick={handleClose}>
            <ListItemIcon>
              <MovieIcon/>
            </ListItemIcon>
            <ListItemText primary="Video" />
          </StyledMenuItem>
        </Link>        
        <Link href="#EXTRA" style={{color: "black"}}>
          <StyledMenuItem onClick={handleClose}>
            <ListItemIcon>
              <BookIcon/>
            </ListItemIcon>
            <ListItemText primary="Extra" />
          </StyledMenuItem>
        </Link>
      </StyledMenu>
    </div>
  );
}