import CardContainer from '../components/CardContainer'

function Habitaciones() {
   
    const cards = [
        {
        img: '../public/img/hab-simple.jpg',
        alt: 'habitacion simple',
        title: 'Single',
        text: 'Una cama de dos plazas. Ventanal con balcón.',
        buttonText: 'Reservar',
        },
    
        {img: '../public/img/hab-doble.jpg',
        alt: 'habitacion doble',
        title: 'Doble',
        text: 'Una cama matrimonial. Ventanal con vista al lago.',
        buttonText: 'Reservar',
        },
    
        {img: '../public/img/hab-triple.jpg',
        alt: 'habitacion triple',
        title: 'Triple',
        text: 'Equipada con una cama matrimonial y una cama de plaza y media. Ventanal.',
        buttonText: 'Reservar',
        },
    
        {img: '../public/img/hab-cuadruple.jpg',
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