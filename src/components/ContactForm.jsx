import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ContactForm({title}) {
  // Estado para los campos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    tel: '',
    motivo: 'consulta',  
    mensaje: '',
    checkbox: false
  });

  // Para manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Para manejar envio del form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
  };

  return (
    <section id="contacto">
    <div className="h2-container">
        <h2>{title}</h2>
    </div> 
    <div className='form'>
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre completo:</label>
      <input 
        type="text" 
        name="nombre" 
        value={formData.nombre} 
        onChange={handleChange} 
      />

      <label htmlFor="email">Correo electrónico:</label>
      <input 
        type="email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
      />

      <label htmlFor="tel">Teléfono:</label>
      <input 
        type="tel" 
        name="tel" 
        value={formData.tel} 
        onChange={handleChange} 
      />

      <label htmlFor="motivo">Motivo de contacto:</label>
      <select 
        name="motivo" 
        value={formData.motivo} 
        onChange={handleChange}
      >
        <option value="consulta">Consulta</option>
        <option value="comentario">Comentario</option>
        <option value="reclamo">Reclamo</option>
        <option value="otro">Otro</option>
      </select>

      <label htmlFor="mensaje">Deja aquí tu mensaje:</label>
      <textarea 
        name="mensaje" 
        value={formData.mensaje} 
        onChange={handleChange}
      ></textarea>

      <div className="form-checkbox">
        <label htmlFor="checkbox" className="checkbox">
          Acepto recibir novedades y promociones de La Serena por correo.
        </label>
        <input 
          className="checkbox" 
          type="checkbox" 
          name="checkbox" 
          checked={formData.checkbox} 
          onChange={handleChange}
        />
      </div>

      <div className="button-container">
        <button className="button-submit" type="submit"> Enviar</button>

        <button className="button-reset" type="reset" onClick={() => setFormData({
          nombre: '',
          email: '',
          tel: '',
          motivo: 'consulta',  
          mensaje: '',
          checkbox: false
        })}>Borrar</button>
      </div>
    </form>
    </div> 
    </section>
  );
}
ContactForm.propTypes = {
    title: PropTypes.string.isRequired,
}

export default ContactForm;