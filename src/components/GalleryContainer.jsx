import PropTypes from 'prop-types'
import GalleryItem from './GalleryItem'


function GalleryContainer({title, images}) {
  return (
    <section id="galeria">
            <div className="h2-container">
                <h2>{title}</h2>
            </div>
            <div className="instalaciones-img">
              {images.map((image, index) => (
                <GalleryItem key= {index} imgUrl= {image.img}
                imgAlt={image.alt}/>
              ))}
            </div>
        </section>
  )
}

GalleryContainer.propTypes = {
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            cardImg: PropTypes.string.isRequired,
            cardAlt: PropTypes.string.isRequired,
        })
    )

}
export default GalleryContainer