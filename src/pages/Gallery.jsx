import GalleryContainer from '../components/GalleryContainer'

const images = [
    {img: '../public/img/jacuzzi.jpg',
     alt: 'jacuzzi',
    },
    {img: '../public/img/pingpong.jpg',
    alt: 'mesa de ping pong',
    },
    {img: '../public/img/piletainterior.jpg',
    alt: 'piscina interior',
    },
    {img: '../public/img/piletaexterior.jpg',
    alt: 'piscina exterior',
    },
    {img: '../public/img/spa.jpg',
    alt: 'spa',
    },
    {img: '../public/img/sauna.jpg',
     alt: 'sauna',
    },
    {img: '../public/img/gym.jpg',
    alt: 'gimnasio',
    },
    {img: '../public/img/cancha.jpg',
    alt: 'cancha de futbol',
    },
    {img: '../public/img/bar.png',
    alt: 'bar',
    },
    {img: '../public/img/restaurante.jpg',
    alt: 'restaurante',
    },
    {img: '../public/img/kids.jpeg',
    alt: 'sala infantil',
    },
    {img: '../public/img/grill.jpg',
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