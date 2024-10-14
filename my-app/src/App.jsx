import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/inicio';
import Productos from './pages/productos';
import QuienesSomos from './pages/quienessomos';
import Contacto from './pages/contacto';

const App = () => {
  return (
    <Router>
      {}
      <Navbar />

      {}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/contacto" element={<Contacto />} />
          {}
          <Route path="*" element={<Inicio />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;