import React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Containerr from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import estilos from "../tarjetasMain/tarjertasMain.module.css";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Skeleton from '@mui/material/Skeleton'






export default function tarjetasMain({ title, descripcion, imageSource}) {
  return (

    <container className="contenidodecard"  > 
      <Card sx={{ maxWidth: 370 }}  className={estilos.carta} elevation={3}>
        <CardMedia className={estilos.img }
          component="img"
          height="250"
          image="data:image/jpeg;base64,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"
          alt="green iguana"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body1" color="#8b8b8b;">
            {descripcion}
          </Typography>
        </CardContent>
        <CardActions className={estilos.contenedorBoton}>
          <Button className={estilos.boton}>Donar</Button>
        </CardActions>
      </Card>
    </container>



    /*<Card sx={{ maxWidth: 345 }} className={estilos.cards}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="140"
      image="/img/edificiojn.jpg"
    />
    <CardContent>
      <Typography className={estilos.titulos} gutterBottom variant="h5" component="div">
       Donacion de plasma
      </Typography>
      <Typography className={estilos.descripcion} variant="body2" color="#737373">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions className={estilos.boton}>
      <Button size="large" variant="outlined" className={estilos.btndonar} >Donar</Button>
      
    </CardActions>
  </Card>*/

    /* <Box
       className={estilos.contenedor}
       direction="column"
       sx={{
         width: 400,
         height: 400,
   
       }}
     >
       <div className={estilos.imagen}>
         <image src="/img/descarga.jfif" alt="" />
       </div>
 
       <div className={estilos.texto}>
         <h1 className={estilos.txtdonacion}>Donacion de plasma</h1>
         <p>
           Lorem ipsum dolor sit amet, conseteur sadipscing elit, sed diam nonumy
           eirmod tempor
         </p>
       </div>
       <div className={estilos.contieneBtn}>
         <Button
           className={estilos.btn}
           variant="contained"
           defaultValue={30}
           sx={{
             width: 140,
             height: 45,
             backgroundColor: "#3C3C3C",
             color: "white",
           }}
         >
           Donar
         </Button>
       </div>
     </Box>*/

  );
}