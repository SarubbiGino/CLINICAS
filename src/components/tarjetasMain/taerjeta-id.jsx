
import React from 'react';
import Carta from './tarjetasMain'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import tarjetasMain from './tarjetasMain';





const cards =  [
    {
        id: 1,
        title: 'Antes de donar, infórmate',
        descripcion: "Estar descansada/o, habiendo dormido por lo menos 6 horas. Sentirse en buenas condiciones (no tener síntomas de malestar general, fiebre, resfrío o tos). Debes desayunar o almorzar de forma habitual y tomar líquidos en abundancia (no alcohólicos). Ingresar a nuestro formulario para saber si eres un posible donante, haciendo CLIC en el botón de DONAR aquí abajo.",
        image: "assets/image4.jpg",
    },
    {
        id: 2,
        title: '¡Bien, eres un posible donante!',
        descripcion: "Una vez hecho nuestro formulario y ver que salió todo bien, te vamos a pedir algunos datos, además de fecha y hora en la que podés concurrir al hospital. ",
        image: "assets/image1.jpg",
    },
    {
        id: 3,
        title: 'Concurrí al Centro de Donación con tu DNI',
        descripcion: "Tené tu DNI a mano porque deberás presentarlo. En caso de tener dudas o estar en desacuerdo tenés derecho de auto excluirte y no donar.",
        image: "assets/image5.jpg",
    },
    {
      id: 4,
      title: 'Preséntate en la mesa de entrada',
      descripcion: " El personal de salud te entrevistará para ver si estás en condiciones de donar. Toda la información que brindes es confidencial. Se verifica tu peso, temperatura, pulso y presión arterial, y se toman muestras de tu sangre para controlar que tus glóbulos rojos estén bien.",
      image: "assets/image3.jpg",
  },
  {
    id: 5,
    title: 'Llegó el momento de donar',
    descripcion: "La extracción dura entre 7 y 10 minutos. Se realiza en un ambiente seguro y con material descartable. Se extrae sólo una unidad de sangre (alrededor de 450 ml) y pequeñas muestras para posteriores análisis.",
    image: "assets/image2.jpg",
},


]

export default function tarjetaid() {
  return (
    <Container>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
        {
            cards.map(tarjetasMain => (
                  <Grid item xs key={tarjetasMain.id}  display="flex" alignItems="center" justifyContent="center" textAlign="center" >
                     <Carta title={tarjetasMain.title} descripcion={tarjetasMain.descripcion} imagen={tarjetasMain.image} />
                  </Grid>
            ))
        }
      </Grid>
    </Container>
  );
}
