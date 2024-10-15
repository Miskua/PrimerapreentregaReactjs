import React from 'react';

const contacto = () => {
  return (
    <div className="text-center">
      <h1>Contacto</h1>
      <p>Puedes contactarnos a través de.....</p>
      
      {}
      <form className="mx-auto" style={{ maxWidth: '500px' }}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input type="email" className="form-control" id="email" placeholder="tuemail@ejemplo.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">Mensaje</label>
          <textarea className="form-control" id="mensaje" rows="4" placeholder="Tu mensaje"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};

export default contacto;