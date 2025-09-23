import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaPadrao from './pages/PaginaPadrao';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe'; 
import NotRouter from './pages/404.jsx'; 
import ScrollToTop from './components/scroll/ScrollToTop.jsx';


function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
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
