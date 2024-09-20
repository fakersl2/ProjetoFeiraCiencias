import React, {useState} from 'react'
import Home from './Home';
import Navbar from './HeaderNav';
import Projetos from './Projetos';
import Gradient from './Gradient';
import Card from './Card';


const Index = () => {
  return (
    <>
    <Navbar />
    <Gradient />
    <Home />
    <Projetos />
    </>
  )
}

export default Index