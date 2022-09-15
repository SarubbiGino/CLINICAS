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
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
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
                <Box className={estilos.contenedorRedes}>
                    <a href='https://es-la.facebook.com/amhclinicas/'><FacebookIcon className={estilos.logos}/></a>
                    <a href="https://twitter.com/Prensaclinicas?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><TwitterIcon className={estilos.logos}/></a>
                    <a href='https://ar.linkedin.com/company/hospital-de-cl%C3%ADnicas-jos%C3%A9-de-san-mart%C3%ADn-'><LinkedInIcon className={estilos.logos}/></a>
                    <a href="https://www.instagram.com/hospitaldeclinicasok/?hl=es"> <InstagramIcon className={estilos.logos}/></a>
                    <a href="tel:011 5950-8000"> <LocalPhoneIcon className={estilos.logos}></LocalPhoneIcon></a>

                </Box>
            </Grid>
        </Grid>
    </Container>
  </Box>
  );
}
