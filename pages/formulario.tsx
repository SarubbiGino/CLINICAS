import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': { width: '25ch' },
      }}
    >
      <RedBar />
      <TextField label={'Nombre'} id="Nombre" />
      <RedBar />
      <TextField label={'Apellido'} id="Apellido" margin="normal" />
      <RedBar />
      <TextField label={'Documento De Identidad'} id="DocumentoDeIdentidad" margin="normal" />
      <RedBar />
      <TextField label={'Correo Electronico'} id="CorreoElectronico" margin="normal" />
      <RedBar />
    </Box>
  );
}


