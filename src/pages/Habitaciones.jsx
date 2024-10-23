import CardContainer from '../components/CardContainer'

function Habitaciones() {
   
    const cards = [
        {
        img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ52hpS810cAebF6LhJn2XSonZW4bO3at3LZ08YNlRgsAN1rnbj',
        alt: 'habitacion simple',
        title: 'Single',
        text: 'Una cama de dos plazas. Ventanal con balcón.',
        buttonText: 'Reservar',
        },
    
        {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyyXBGnvHNPuQvi7bPsW5y1e0gCUQdWsZE3fi1m8BjJbMS4Jy4',
        alt: 'habitacion doble',
        title: 'Doble',
        text: 'Una cama matrimonial. Ventanal con vista al lago.',
        buttonText: 'Reservar',
        },
    
        {img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT1CfFQSH5kLwj-RmD32sstOK9y2tAxAbGKPTd8P8P1yvwgRZSg',
        alt: 'habitacion triple',
        title: 'Triple',
        text: 'Equipada con una cama matrimonial y una cama de plaza y media. Ventanal.',
        buttonText: 'Reservar',
        },
    
        {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEaneV4FjXrufnQg3AD-SQsAkrHMH-rYaRPNNc6ZgkfQizyBGs',
        alt: 'habitacion cuadruple',
        title: 'Cuádruple',
        text: 'Equipada con cuatro camas de plaza y media. Ventanal.',
        buttonText: 'Reservar',
        },
    ]
  return (
<>
    <CardContainer
    title = 'Habitaciones'
    cards = {cards}
    />
</>
  )
}

export default Habitaciones