import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Avaliacoes from './pages/avaliacoes';
import Cadastro from './pages/cadastro';
import Footer from './pages/Footer';
import Gradient from './pages/Gradient';
import Headernav from './pages/HeaderNav';
import Home from './pages/Home';
import Login from './pages/login';
import Projetos from './pages/Projetos';

export const Rotas = () => {
    return (
        <Router>
            <Routes>
                <Route path="/avaliacoes" element={<Avaliacoes />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/footer" element={<Footer />} />
                <Route path="/gradient" element={<Gradient />} />
                <Route path="/headernav" element={<Headernav />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Projetos" element={<Projetos />} />
            </Routes>
        </Router>
    );
};

export default Rotas;
