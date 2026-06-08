import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change or escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLinks = [
    { to: '/', label: 'Inicio', end: true },
    { to: '/cuadrados', label: 'Progreso' },
    { to: '/comprar', label: 'Colaborar' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
      <div className="navbar__container container">
        <NavLink to="/" className="navbar__brand" aria-label="Club Argentino - Ir al inicio">
          <img src={logo} alt="Escudo del Club Argentino de Marcos Juárez" className="navbar__logo" width="48" height="48" />
          <div className="navbar__brand-text">
            <span className="navbar__club-name">Club Argentino</span>
            <span className="navbar__club-city">Marcos Juárez</span>
          </div>
        </NavLink>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          aria-label={menuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
        >
          <span className="navbar__hamburger-line" aria-hidden="true"></span>
          <span className="navbar__hamburger-line" aria-hidden="true"></span>
          <span className="navbar__hamburger-line" aria-hidden="true"></span>
        </button>

        <nav
          id="nav-menu"
          className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}
          role="navigation"
          aria-label="Navegación principal"
        >
          <ul className="navbar__list">
            {navLinks.map((link) => (
              <li key={link.to} className="navbar__item">
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {menuOpen && (
          <div
            className="navbar__overlay"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
