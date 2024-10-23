
//Se importan los css y todos los componentes.
import './App.css';
import '../public/css/style.css';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Home from './pages/Home';
import Habitaciones from './pages/Habitaciones';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
//Arriba del return se define todo con js! Variables, arrays, estados.

//Este es el array creado para los botones del nav. Cada posicion del array representa un boton y contiene el nombre, la URL y el icono. Si a futuro se necesitaran mas botones, se pueden agregar sumando un elemento aca en vez de modificando el componente del header

const navLinks = [
  {name: 'Inicio', url: '/La-Serena-Hotel/home', icon: 'fa-solid fa-house' },
  {name: 'Habitaciones', url: '/La-Serena-Hotel/habitaciones', icon: 'fa-solid fa-bed' },
  {name: 'Instalaciones', url: '/La-Serena-Hotel/gallery', icon: 'fa-solid fa-image' },
  {name: 'Contacto', url: '/La-Serena-Hotel/contact', icon: 'fa-solid fa-envelope' },
  
]

const footerIcons = [
  {class: 'fa-brands fa-whatsapp'},
  {class: 'fa-brands fa-facebook'},
  {class: 'fa-brands fa-instagram'},
]



  return (
    <>
    {/* Se devuelven todos los componentes con sus props usadas entre llaves */}
  <Router basename='/La-Serena-Hotel'>
    <Header
    webTitle ='Hotel La Serena'
    navLinks = {navLinks}
    />

    <Routes>
      <Route path = "/" element={<Home />}/>
      <Route path = "/home" element={<Home />}/>
      <Route path = "/habitaciones" element={<Habitaciones />}/>
      <Route path = "/gallery" element={<Gallery />}/>
      <Route path = "/contact" element={<Contact />}/>
    </Routes>

    <Footer
    footerText = 'Creado por Dominica Falco' 
    footerIcons = {footerIcons}
    />
  </Router>
    </>
  )

}

export default App
