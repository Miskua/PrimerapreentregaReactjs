import React from 'react';
import CartWidget from './cartwidget.jsx';

function NavBar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f4f4f4', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <img src="" alt="Logo tienda de ropa" style={{ height: '40px' }} />
      </div>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;