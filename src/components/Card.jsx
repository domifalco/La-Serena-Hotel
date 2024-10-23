import PropTypes from 'prop-types'

function Card({imgUrl, imgAlt, cardTitle, cardText, buttonText}) {
  return (

    <div className="card">
        <img src={imgUrl} className="card-img-top" alt= {imgAlt}/>
        <div className="card-body">
          <h5 className="card-title"> {cardTitle} </h5>
          <p className="card-text"> {cardText} </p> 
          <a href="#" className="btn btn-primary"> {buttonText} </a>
        </div>
    </div>


  )
  }

Card.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    cardTitle: PropTypes.string.isRequired,
    cardText: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
}

export default Card