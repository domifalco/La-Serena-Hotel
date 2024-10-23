import PropTypes from 'prop-types'

function footer({footerText, footerIcons}) {
  return (
    <footer>
        
    <div className="footer-text">
    <p> {footerText} </p>
     </div>

    <div className="footer-icons">
    {footerIcons.map((icon, index) => (
        <p key = {index} className="icon"><i className = {icon.class}></i></p> 
    ))}
    </div>

</footer>
  )
}

footer.propTypes = {
    footerText: PropTypes.string.isRequired,
    footerIcons: PropTypes.arrayOf(
        PropTypes.shape({class:PropTypes.string.isRequired})
    ),

}

export default footer