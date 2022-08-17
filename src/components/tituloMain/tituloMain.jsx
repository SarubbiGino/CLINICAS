import React from 'react';
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import estilos from '../tituloMain/tituloMain.module.css'
import { motion } from "framer-motion";







export default function tituloMain() {
  return (
      
      <Grid  container direction="column"
      justifyContent="center"
      alignItems="flex-start"
      rowSpacing={3}
      height={700} 
      paddingLeft={1}
      paddingTop={10}>

     

      <Grid item xs={0} >
            <h1 className={estilos.titulo}>Donacion de plasma</h1>
      </Grid>
      <Grid item xs={0} >
            <p className={estilos.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, est necessitatibus voluptates iusto labore architecto temporibus dolorum, harum fugiat magni error pariatur ipsa! Fugit nesciunt</p>
      </Grid>
      <Grid item xs={0} className="contenedorBTN">
            <Button className={estilos.Button}>Formulario de donacion</Button>
      </Grid>
     
      </Grid>
   
  );
}
