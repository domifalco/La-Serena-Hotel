import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CommentForm({title}) {
  // Estado para gestionar el formulario y las cards
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: 'https://picsum.photos/300/200',
    bgColor: '#ffffff',
    borderColor: '#a52a2a'
  });

  const [cards, setCards] = useState([]); // Estado para almacenar las tarjetas creadas

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Manejar el envio del form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Añadir una nueva card al array de cards
    setCards([...cards, { ...formData }]);

    // Limpiar el form
    setFormData({
      title: '',
      description: '',
      imageUrl: 'https://picsum.photos/300/200',
      bgColor: '#ffffff',
      borderColor: '#a52a2a'
    });
  console.log (formData)};



  return (

    <section id="reviews">
         <div className="h2-container">
            <h2>{title}</h2>
        </div>

        <div id="cards-container">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="card-review" 
            style={{ backgroundColor: card.bgColor, borderColor: card.borderColor, borderStyle: 'solid', margin: '10px' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = ''}
          >
            <img src={card.imageUrl} alt="Card image" />
            <div className="card-review-content">
              <p className="card-review-title">{card.title}</p>
              <p className="card-review-description">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

   <div className="form">
    <form id="card-form" onSubmit={handleSubmit}>
        <label htmlFor="card-title">Título:</label>
        <input 
          type="text" 
          name="title" 
          id="card-title" 
          value={formData.title} 
          onChange={handleChange} 
          required
        />
        <br />

        <label htmlFor="card-description">Reseña:</label>
        <textarea 
          name="description" 
          id="card-description" 
          value={formData.description} 
          onChange={handleChange} 
          required
        />
        <br />

        <label htmlFor="card-image">Imagen (URL):</label>
        <input 
          type="url" 
          name="imageUrl" 
          id="card-image" 
          value={formData.imageUrl} 
          onChange={handleChange} 
          placeholder="https://picsum.photos/300/200"
        />
        <br />

        <h3>Personalizá tu reseña:</h3>

        <div>
          <label htmlFor="card-bg-color">Color de fondo:</label>
          <input 
            type="color" 
            name="bgColor" 
            id="card-bg-color" 
            value={formData.bgColor} 
            onChange={handleChange} 
          />
        </div>

        <div>
          <label htmlFor="card-border-color">Color de borde:</label>
          <input 
            type="color" 
            name="borderColor" 
            id="card-border-color" 
            value={formData.borderColor} 
            onChange={handleChange} 
          />
        </div>

        <div className="button-container">
          <button className="button-submit" type="submit">Agregar</button>
          <button 
            className="button-reset" 
            type="reset" 
            onClick={() => setFormData({
              title: '',
              description: '',
              imageUrl: 'https://picsum.photos/300/200',
              bgColor: '#ffffff',
              borderColor: '#a52a2a'
            })}
          >
            Borrar
          </button>
        </div>
      </form>
      </div>
</section>

  );
}

CommentForm.propTypes = {
    title: PropTypes.string.isRequired,
}
export default CommentForm;
