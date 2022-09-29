import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import estilos from './modal.module.css'

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
    <div className={estilos.contenedorpadre}>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={estilos.modal}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Muchas gracias por tomarte el tiempo de completar el formulario!
Felicitaciones por convertirte en donante, nos encantaría que te contactes con nosotros para darte un turno lo antes posible.
o podes reservar tu turno haciendo click en este enlace!
          </Typography>

<div className={estilos.contenedorlogos}>

    <a href='https://es-la.facebook.com/amhclinicas/'><FacebookIcon className={estilos.logos}/></a>
    <a href="https://twitter.com/Prensaclinicas?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><TwitterIcon className={estilos.logos}/></a>
    <a href='https://ar.linkedin.com/company/hospital-de-cl%C3%ADnicas-jos%C3%A9-de-san-mart%C3%ADn-'><LinkedInIcon className={estilos.logos}/></a>
     <a href="https://www.instagram.com/hospitaldeclinicasok/?hl=es"> <InstagramIcon className={estilos.logos}/></a>
     <a href="tel:011 5950-8000"> <LocalPhoneIcon className={estilos.logos}></LocalPhoneIcon></a>
</div>

        </Box>
      </Modal>
    </div>
  );
}
