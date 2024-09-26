import React from 'react'
import Navbar from './HeaderNav';
import Home from './Home';
import Projetos from './Projetos';
import Gradient from './Gradient';
import Footer from './Footer';


const Inicio = () => {
  return (
    <>
    <Navbar />
    <Gradient />
    <Home />
    <Projetos />
    </>
  )
}

export default Inicio;