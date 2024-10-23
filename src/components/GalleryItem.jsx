import React from 'react'
import PropTypes from 'prop-types'

function GalleryItem({imgUrl, imgAlt}) {
  return (
    <img className="galery" src= {imgUrl} alt= {imgAlt}/>
  )
}

GalleryItem.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
}
export default GalleryItem