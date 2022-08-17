import * as React from 'react';
import Button from '@mui/material/Button';
import MenuDespegable from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/material/Menu'
import IconoMenuAppBar from '@mui/icons-material/Menu';
import estilos from './menu.module.css'

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div >
        <IconoMenuAppBar
        className = {estilos.iconoMenu}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}/>
     
      <MenuDespegable
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} className={estilos.opcionesDelMenu} ><a href >Turnos</a></MenuItem>
        <MenuItem onClick={handleClose} className={estilos.opcionesDelMenu}><a href>Donar</a></MenuItem>
        <MenuItem onClick={handleClose} className={estilos.opcionesDelMenu}><a href>Registrarse</a></MenuItem>
      </MenuDespegable>
    </div>
  );
}


/* <IconButton aria-label="menu">
        <Menu2 
        className = {estilos.iconoMenu}

        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}/>
      </IconButton> */