import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" style={{ width: '40px', marginRight: '10px' }} />
          Mi Página
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/inicio" end>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/productos">
                Productos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/quienessomos">
                Quiénes Somos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacto">
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;