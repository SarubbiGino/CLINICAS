import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import footerestilo from '../components/footer.module.css'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import estilos from '../components/footer.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/FacebookTwoTone';
import YoutubeIcon from '@mui/icons-material/Youtube';
import WhatsappIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



export default function Footer() {
  return (
  <Box className={estilos.footer}>
    <Container maxWidth = "lg">
        <Grid container spacing = {5}  direction="column" alignItems="center" justifyContent="center">
            <Grid item xs ={12} sm={4} alignItems="center" justifyContent="center" >
            <Box className={estilos.clinicas} alignItems="center" justifyContent="center" textAlign="center">Hospital de clinicas</Box>
                <Box className={estilos.contenedorClinicas}>
                    <p className={estilos.parrafoClinicas}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </Box>
            </Grid>

            <Grid item xs ={12} sm={4} >
             <Box className={estilos.redes}>Redes Sociales</Box>
                <Box className={estilos.contenedorRedes} >
                   <FacebookIcon className={estilos.logos}/>
                   <TwitterIcon className={estilos.logos}/>
                   <LinkedInIcon className={estilos.logos}/>
                   <YoutubeIcon className={estilos.logos}/>
                   <WhatsappIcon className={estilos.logos}/> 
                </Box>
            </Grid>
        </Grid>
    </Container>
  </Box>
  );
}
