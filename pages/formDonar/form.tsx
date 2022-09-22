import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Modal from '../formDonar/modalN'
import Moodal from '../formDonar/modalS'
import estilos from '../formDonar/form.module.css'

export default function AddressForm() {
  return (
    <React.Fragment>
      <p className={estilos.titulo}>Requisitos para Donar</p>
      
      <Grid className={estilos.contenedorForm}>
           <p>¿Tenes entre 16 y 65 años?</p>
               
        <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Si"
          />
          <Modal/>
          </Grid>
          
          <Grid className={estilos.contenedorForm}>
           <p>¿Pesas mas de 50 kilos?</p>
               
        <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Si"
          />
          <Modal/>
          </Grid>  

          <Grid className={estilos.contenedorForm}>
           <p>En los últimos 6 meses, ¿te hiciste algún tatuaje, alguna
               endoscopía o cirugía?</p>
               
          <Moodal/>
        <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="No"
          />
          </Grid>
          <Grid className={estilos.contenedorForm}>
           <p>¿Donaste sangre en los últimos 2 meses?</p>
               
          <Moodal/>
        <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="No"
          />
          </Grid>
          <Grid className={estilos.contenedorForm}>
           <p>¿Estás cursando un embarazo o en período de lactancia exclusiva?</p>
               
          <Moodal/>
        <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="No"
          />
          </Grid>
          
        <Button className={estilos.boton} variant="contained">Enviar</Button>
    </React.Fragment>
  );
}