import * as React from 'react';
import {useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import estilos from '../infoAdmins/info.module.css'
import Button from '@mui/material/Button';

const Form = () =>{
    const [inputValues, setInputValues] = useState({
        Nombre: '',
        Apellido: '',
        Email: ''
    })

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

const handleSubmit = () => {}

const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
        ...inputValues,
        [evt.target.name]: evt.target.value
    })
}

  return (
      <div>
          
      <Box sx={style} onSubmit={handleSubmit}>
          <Typography className={estilos.tituloAdmin} id="modal-modal-title" variant="h6" component="h2">
            Informacion de administradores
          </Typography>
            <TextField onChange={handleChange} value={inputValues.Nombre} className={estilos.admin} name='Nombre' label="Nombre" variant="outlined" />
            <TextField onChange={handleChange} value={inputValues.Apellido} className={estilos.admin} name='Apellido' label="Apellido" variant="outlined" />
            <TextField onChange={handleChange} value={inputValues.Email} className={estilos.admin} type='email' name='Email' label="Email" variant="outlined" />
     
      <div className={estilos.boton2}>
        <Button type="submit" variant="contained">
            Enviar</Button>
      </div>
        </Box>
      </div>
  );
}

export default Form
