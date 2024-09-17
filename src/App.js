import './App.css';
import HeaderNav from './pages/HeaderNav.js';
import Gradient from './pages/Gradient.js';
import Avaliacoes from './pages/avaliacoes.js';
import Projetos from './pages/Projetos.js';
import Cadastro from './pages/cadastro.js';
import Modal from './components/modal.js';

function App() {
  return (
    <>
      <Modal />
      <Cadastro />
      <HeaderNav />
      <Gradient />
      <Projetos />
      <Avaliacoes />
    </>
  );
}

export default App;
