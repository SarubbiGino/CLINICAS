import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import estilos from '../formDonar/form.module.css'

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
    <div className={estilos.contenedorNS}>
      <FormControlLabel onClick={handleOpen}
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="No"
            
          />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className={estilos.titulo} id="modal-modal-title" variant="h6" component="h2">
            Hospital de Clínicas
          </Typography>
          <p className={estilos.textoerror} id="modal-modal-description" sx={{ mt: 2 }}>
            Lamentablemente no cumplís con las condiciones para donar sangre en este momento.
¡Seguí promocionando la donación voluntaria de sangre!
          </p>
        </Box>
      </Modal>
    </div>
  );
}
