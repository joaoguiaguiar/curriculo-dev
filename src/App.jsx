import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import PaginaPadrao from './pages/PaginaPadrao';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe'; 
import Curriculo from './pages/Curriculo/index.jsx';
import Tecnologias from './pages/Tecnologias';
import Portfolio from './pages/Portfolio';
import ProjetoDetalhe from './pages/ProjetoDetalhe/index.jsx';
import Contato from './pages/Contato/index.jsx';
import NotRouter from './pages/404.jsx'; 
import ScrollToTop from './components/scroll/ScrollToTop.jsx';


function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path='inicio' element={<Home />} />
          <Route path='sobre' element={<AboutMe />} />
          <Route path='curriculo' element={<Curriculo />} />
          <Route path='tecnologias' element={<Tecnologias />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='portfolio/:id' element={<ProjetoDetalhe />} />
          <Route path='contato' element={<Contato />} />
          <Route path='about-me' element={<Navigate to='/sobre' replace />} />
        </Route>
        <Route path='*' element={<NotRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
