import React from 'react';
import Navbar from '../components/navbar/navbar'
import Footer from '../components/Footer'
import estilos from '../components/navbar/navbar.module.css'
export default function layout({children}) {
  return (
    <div>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
    </div>
  );
}
