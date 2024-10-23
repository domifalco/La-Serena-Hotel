import PropTypes from 'prop-types'

function index({title, paragraph, highlightText, imgUrl, imgAlt}) {
  return (

    <main className="index">
         <section id="inicio">

             <div className="h2-container">
             <h2>{title}</h2>
             </div>

             <div className="text">
             {paragraph.map((p, index) => (
             <p key = {index} > {p.text} </p> 
             ))}

            <p className="highlight"> {highlightText} </p>

            </div>

          

            <div className="inicio-img">
            <img className="fachada" src= {imgUrl} alt= {imgAlt}/>
            </div>
            </section>  
    </main>
  )}

index.propTypes = {
    indexTitle: PropTypes.string.isRequired,
    paragraph: PropTypes.arrayOf(
        PropTypes.shape({text: PropTypes.string.isRequired})
    ),
    highlightText: PropTypes.string.isRequired,
    imgUrl: PropTypes.string,
    imgAlt: PropTypes.string,
}


export default index