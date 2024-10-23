import React from 'react';
import Index from '../components/index';

function Home() {

    const paragraph = [
        {text: 'Bienvenidos a La Serena, el refugio perfecto para escapar de la rutina y sumergirse en un ambiente de relajación y confort.'},
        {text: 'Nuestro hotel boutique ofrece una experiencia única a cada uno de nuestros huéspedes, donde la atención personalizada y el servicio de primera clase se combinan con un ambiente cálido y acogedor.'},
    ]
  return (
    <Index
    title = 'Inicio'
    paragraph = {paragraph}
    highlightText = 'Reserve su habitación hoy mismo y comience a planificar su escapada perfecta.'
    imgUrl= '../La-Serena-Hotel/public/img/hotel fachada.jpg'
    imgAlt = 'hotel la Serena'
    />
  )
}

export default Home