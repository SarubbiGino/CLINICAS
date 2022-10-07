import styles from "../styles/Home.module.css";
import TituloMain from "../src/components/tituloMain/tituloMain";
import Tarjetas from "../src/components/tarjetasMain/taerjeta-id";
import { Container } from "@mui/system";
import React from "react";

const Home = () => {
  return (
    <Container>
      <main className={styles.main}>
        <TituloMain />
        <h1 className={styles.empiezaDonar}>Empieza a Donar</h1>
        <h2>¿COMO DONAR SANGRE?</h2>
        <Tarjetas />
      </main>
    </Container>
  );
};

export default Home;
