import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import styles from "./FormularioTurnos.module.css"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function RedBar() {
  return (
    <Box
      sx={{
        height: 20,
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? 'rgba(255, 0, 0, 0.1)'
            : 'rgb(255 132 132 / 25%)',
      }}
    />
  );
}

export default function LayoutTextFields() {
  return (
    <Box className={styles.contenedor}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': { width: '25ch' },
      }}
    >
      <RedBar />
      <p> Completá con tus datos el siguiente formulario </p>
    
      <RedBar />

      <TextField label={'Nombre'} id="Nombre"/>
      <TextField label={'Apellido'} id="Apellido" margin="normal" />
      <TextField label={'Documento De Identidad'} id="DocumentoDeIdentidad" margin="normal" />
      <TextField label={'Correo Electronico'} id="CorreoElectronico" margin="normal" />
      <TextField label={'Numero De Telefono'} id="NumeroDeTelefono" margin="normal" />
      <RedBar />

      <p> Elegí unos de los siguientes turnos </p>

      <div>

      <FormGroup className={styles.contenedorCheck}>
      <FormControlLabel control={<Checkbox defaultChecked />} label="23/05/2023 a las 15:30hs" />
      <FormControlLabel control={<Checkbox />} label="17/12/2022 a las 15:35hs" />
      <FormControlLabel  control={<Checkbox />} label="08/11/2022 a las 12:00hs" />
    </FormGroup>
      </div>

    </Box>
     
  );
}
