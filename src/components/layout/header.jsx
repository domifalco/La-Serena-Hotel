import PropTypes from 'prop-types'

//Se incluyen todas las props que se usan
function header({webTitle, navLinks}) {

  return (
    //Se copia todo el html del header (hecho en el tp pasado)
    <header>
        <section>

            <div className="h1-container">
                {/* En vez de harcodear el titulo se lo pone como una prop cuyo valor se define en App.jsx     */}
                <h1>{webTitle}</h1>
            </div>

            <div className="nav-container">
                <nav>
                    <ul>
                    {/* En vez de tener los 4 botones por separado, se crea una prop generica 'navLinks'. Esa prop va a ser un array que tendra el nombre, el URL y el icon. Se aplica una funcion map para que se creen tantos botones (li) como arrays definidos en App.jsx */}

                       {navLinks.map((link, index) => (
                        //Para iterar se usa como key la posicion en el index
                        <li key = {index}> 
                            <a href= {link.url}><i className= {link.icon}></i> {link.name} 
                            </a>
                        </li>
                        ))}

                    </ul>
                </nav>
            </div>
        
        </section>
    </header>
  )
}

//Definicion de props del componente al final, con tipo y si es obligatorio o no. 
header.propTypes = {
    webTitle: PropTypes.string.isRequired,
    navLinks: PropTypes.arrayOf(
        PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        })
    ).isRequired,

}
//Para definir valores por defectos de cada prop.
// header.defaultProps{
//   webtitle = "La Serena";
// }

export default header