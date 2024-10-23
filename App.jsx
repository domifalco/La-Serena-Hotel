
//Se importan los css y todos los componentes.
import './App.css';
import '../La-Serena-Hotel/public/css/style.css';
import Header from './src/components/layout/header';
import Footer from './src/components/layout/footer';
import Home from './src/pages/Home';
import Habitaciones from './src/pages/Habitaciones';
import Gallery from './src/pages/Gallery';
import Contact from './src/pages/Contact';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const navLinks = [
    {name: 'Inicio', url: '/La-Serena-Hotel/#/home', icon: 'fa-solid fa-house' },
    {name: 'Habitaciones', url: '/La-Serena-Hotel/#/habitaciones', icon: 'fa-solid fa-bed' },
    {name: 'Instalaciones', url: '/La-Serena-Hotel/#/gallery', icon: 'fa-solid fa-image' },
    {name: 'Contacto', url: '/La-Serena-Hotel/#/contact', icon: 'fa-solid fa-envelope' },
  ];

  const footerIcons = [
    {class: 'fa-brands fa-whatsapp'},
    {class: 'fa-brands fa-facebook'},
    {class: 'fa-brands fa-instagram'},
  ];

  return (
    <>
      <Router>
        <Header
          webTitle='Hotel La Serena'
          navLinks={navLinks}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/habitaciones" element={<Habitaciones />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer
          footerText='Creado por Dominica Falco'
          footerIcons={footerIcons}
        />
      </Router>
    </>
  );
}

export default App;