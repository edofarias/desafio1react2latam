// Contact.jsx
import React from 'react';
import '../App.css';  // Archivo CSS para estilos específicos de Contact

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío del formulario
    // Puedes agregar aquí la lógica para enviar los datos del formulario
  };

  return (
    <div className="contact-container">
      <h1>Cuéntanos, ¿en qué te podemos ayudar?</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción:</label>
          <textarea id="description" name="description" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;

