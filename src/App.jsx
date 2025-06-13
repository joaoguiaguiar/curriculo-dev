import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaPadrao from './pages/PaginaPadrao';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe'; // Corrigi typo aqui também
import NotRouter from './pages/404.jsx'; // Corrigi typo aqui também



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path='about-me' element={<AboutMe />} />
        </Route>
        <Route path='*' element={<NotRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
