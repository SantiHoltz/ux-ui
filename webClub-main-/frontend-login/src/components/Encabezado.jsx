import React from 'react';
import logo from '../assets/img/logo.png';
import './Encabezado.css';

const Encabezado = () => {
  return (
    <header className="encabezado">
      <div className="encabezado-container">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-imagen" />
          <h1>Argentino de Marcos Juarez</h1>
        </div>
      </div>
    </header>
  );
};

export default Encabezado;
