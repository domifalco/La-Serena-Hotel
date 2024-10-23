import GalleryContainer from '../components/GalleryContainer'

const images = [
    {img: '../La-Serena-Hotel/public/img/jacuzzi.jpg',
     alt: 'jacuzzi',
    },
    {img: '../La-Serena-Hotel/public/img/pingpong.jpg',
    alt: 'mesa de ping pong',
    },
    {img: '../La-Serena-Hotel/public/img/piletainterior.jpg',
    alt: 'piscina interior',
    },
    {img: '../La-Serena-Hotel/public/img/piletaexterior.jpg',
    alt: 'piscina exterior',
    },
    {img: '../La-Serena-Hotel/public/img/spa.jpg',
    alt: 'spa',
    },
    {img: '../La-Serena-Hotel/public/img/sauna.jpg',
     alt: 'sauna',
    },
    {img: '../La-Serena-Hotel/public/img/gym.jpg',
    alt: 'gimnasio',
    },
    {img: '../La-Serena-Hotel/public/img/cancha.jpg',
    alt: 'cancha de futbol',
    },
    {img: '../La-Serena-Hotel/public/img/bar.png',
    alt: 'bar',
    },
    {img: '../La-Serena-Hotel/public/img/restaurante.jpg',
    alt: 'restaurante',
    },
    {img: '../La-Serena-Hotel/public/img/kids.jpeg',
    alt: 'sala infantil',
    },
    {img: '../La-Serena-Hotel/public/img/grill.jpg',
    alt: 'parrilla',
    },
]

function Gallery() {
  return (
    <>
    <GalleryContainer 
    title = 'Instalaciones'
    images = {images}/>
    </>
  )
}

export default Gallery