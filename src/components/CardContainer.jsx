import PropTypes from 'prop-types'
import Card from './Card'

function CardContainer({cards, title}) {
  return (
<section id="habitaciones">
     <div class="h2-container">
        <h2>{title}</h2>
    </div>
    
    
    <div class="card-container">
    {cards.map((card, index) => (
    <Card  key = {index}
    imgUrl= {card.img}
    imgAlt={card.alt}
    cardTitle= {card.title}
    cardText={card.text}
    buttonText= {card.buttonText}
    />
    ))}
      </div>

</section>
  )
}

CardContainer.propTypes = {
cards: PropTypes.arrayOf(
        PropTypes.shape({
            imgUrl: PropTypes.string.isRequired,
            imgAlt: PropTypes.string.isRequired,
            cardTitle: PropTypes.string.isRequired,
            cardText: PropTypes.string.isRequired,
            buttonText: PropTypes.string.isRequired,
        })
    ).isRequired
}

export default CardContainer