import logo from './logo.svg';
import './App.css';
import HeaderNav from './pages/HeaderNav.js';
import Gradient from './pages/Gradient.js';
import Avaliacoes from './pages/avaliacoes.js';
import Projetos from './pages/Projetos.js';
import { MdSentimentSatisfiedAlt } from "react-icons/md"; /* ICONE DE BOM */

function App() {
  return (
      <>
        <HeaderNav/>
        <Gradient/>  
        <Projetos/>  
        <Avaliacoes/> 
      </>
  );
}

export default App;
