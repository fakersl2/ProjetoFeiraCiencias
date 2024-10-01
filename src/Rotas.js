import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaginaErro from './pages/PaginaErro';
import Avaliacoes from './pages/avaliacoes';
import Cadastro from './pages/cadastro';
import Footer from './pages/Footer';
import Gradient from './pages/Gradient';
import Headernav from './pages/HeaderNav';
import Home from './pages/Home';
import Login from './pages/login';
import Projetos from './pages/Projetos';
import Inicio from './pages/Inicio';
import Projeto2 from './pages/Projeto2';

export const Rotas = () => {
    return (
        <Router>
            <Routes>
                {/* Rota pra caso a pessoa digite o caminho errado */}
                <Route path="*" element={<PaginaErro />} />


                {/* Rotas para as outras páginas, depois precisa colocar
                todos os componentes da página principal em uma página só
                e separar as outras*/}
                <Route path="/avaliacoes" element={<Avaliacoes />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/footer" element={<Footer />} />
                <Route path="/gradient" element={<Gradient />} />
                <Route path="/headernav" element={<Headernav />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/projeto/:id" element={<Projeto2 />} />
            </Routes>
        </Router>
    );
};

export default Rotas;
