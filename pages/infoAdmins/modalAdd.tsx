import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import estilos from '../infoAdmins/info.module.css'
import AddIcon from '@mui/icons-material/Add';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div> 
        <Button onClick={handleOpen} className={estilos.botonAdd} color="secondary" aria-label="add">
            Agregar Administrador
        </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className={estilos.tituloAdmin} id="modal-modal-title" variant="h6" component="h2">
            Informacion de administradores
          </Typography>
            <TextField className={estilos.admin} id="outlined-basic" label="Nombre" variant="outlined" />
            <TextField className={estilos.admin} id="outlined-basic" label="Apellido" variant="outlined" />
            <TextField className={estilos.admin} id="outlined-basic" label="Email" variant="outlined" />
            <div className={estilos.boton2}>
                    <Button variant="contained">Enviar</Button>
                </div>
        </Box>
      </Modal>
    </div>
  );
}