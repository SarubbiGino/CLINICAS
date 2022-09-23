import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import estilos from '../infoAdmins/info.module.css'
import AddIcon from '@mui/icons-material/Add';
import Enviar from '../infoAdmins/enviar'


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
        <Box>
            <Enviar/>
        </Box>
      </Modal>
    </div>
  );
}



