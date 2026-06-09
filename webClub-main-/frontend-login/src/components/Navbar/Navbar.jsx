import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
      <div className="navbar__container container">
        <NavLink to="/admin" className="navbar__brand" aria-label="Panel Administrativo">
          <img src={logo} alt="Escudo del Club Argentino de Marcos Juárez" className="navbar__logo" width="48" height="48" />
          <div className="navbar__brand-text">
            <span className="navbar__club-name">Club Argentino</span>
            <span className="navbar__club-city">Panel Administrativo</span>
          </div>
        </NavLink>

        <button onClick={handleLogout} className="navbar__logout-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="logout-icon">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
          <span className="logout-text">Cerrar Sesión</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
