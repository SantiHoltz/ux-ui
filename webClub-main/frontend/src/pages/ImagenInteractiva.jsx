import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import imagenCancha from '../assets/img/Cancha.png';
import compradorService from '../services/compradorService';
import './ImagenInteractiva.css';

const ImagenInteractiva = () => {
  const [hoveredSquare, setHoveredSquare] = useState(null);
  const [compradores, setCompradores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const cargarCompradores = async () => {
      try {
        setLoading(true);
        const datos = await compradorService.obtenerCompradores();
        setCompradores(datos);
        setError(null);
      } catch (err) {
        console.error('Error al cargar compradores:', err);
        setError('No se pudieron cargar los datos. Intentá de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    cargarCompradores();
  }, []);

  const obtenerPersona = (numeroCuadrado) => {
    const comprador = compradores.find(c => c.cuadricula === numeroCuadrado);
    return comprador ? comprador.nombre : "Disponible";
  };

  const estaComprado = (numeroCuadrado) => {
    return compradores.some(c => c.cuadricula === numeroCuadrado);
  };

  const calcularPosicionTooltip = (numeroCuadrado) => {
    const columnas = 32;
    const columna = (numeroCuadrado - 1) % columnas;

    const estaEnBordeIzquierdo = columna < 3;
    const estaEnBordeDerecho = columna > columnas - 4;

    let posicion = {
      top: '-45px',
      bottom: 'auto',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000
    };

    if (estaEnBordeIzquierdo) {
      posicion.left = '0%';
      posicion.transform = 'translateX(0)';
    } else if (estaEnBordeDerecho) {
      posicion.left = '100%';
      posicion.transform = 'translateX(-100%)';
    }

    return posicion;
  };

  const filas = 19;
  const columnas = 32;
  const totalCuadrados = filas * columnas;
  const cuadrados = Array.from({ length: totalCuadrados }, (_, index) => index + 1);

  const vendidos = compradores.length;
  const disponibles = totalCuadrados - vendidos;
  const porcentaje = ((vendidos / totalCuadrados) * 100).toFixed(1);

  if (loading) {
    return (
      <div className="progreso-page">
        <section className="section" aria-labelledby="progreso-titulo">
          <div className="container">
            <div className="section-header">
              <span className="section-header__label">Progreso</span>
              <h1 id="progreso-titulo" className="section-header__title">Mapa del proyecto</h1>
            </div>
            <div className="progreso-loading" role="status" aria-label="Cargando datos del progreso">
              <div className="spinner"></div>
              <p className="progreso-loading__text">Cargando datos del proyecto...</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="progreso-page">
        <section className="section" aria-labelledby="progreso-titulo">
          <div className="container">
            <div className="section-header">
              <span className="section-header__label">Progreso</span>
              <h1 id="progreso-titulo" className="section-header__title">Mapa del proyecto</h1>
            </div>
            <div className="progreso-error" role="alert">
              <svg className="progreso-error__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <p className="progreso-error__text">{error}</p>
              <button
                className="btn btn--primary"
                onClick={() => window.location.reload()}
              >
                Reintentar
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="progreso-page">
      {/* Stats section */}
      <section className="section progreso-stats-section" aria-labelledby="progreso-titulo">
        <div className="container">
          <div className="section-header">
            <span className="section-header__label">Progreso del proyecto</span>
            <h1 id="progreso-titulo" className="section-header__title">
              Cancha Club Argentino
            </h1>
            <p className="section-header__description">
              Pulsá sobre las tablas de la cancha para ver quién ya es parte de este sueño
            </p>
          </div>

          {/* Progress bar */}
          <div className="progreso-bar" role="progressbar" aria-valuenow={porcentaje} aria-valuemin="0" aria-valuemax="100" aria-label={`Progreso del proyecto: ${porcentaje}% completado`}>
            <div className="progreso-bar__track">
              <div
                className="progreso-bar__fill"
                style={{ width: `${porcentaje}%` }}
              ></div>
            </div>
            <span className="progreso-bar__label">{porcentaje}% completado</span>
          </div>

          {/* Stats cards */}
          <div className="progreso-stats">
            <div className="progreso-stat-card">
              <span className="progreso-stat-card__number">{totalCuadrados}</span>
              <span className="progreso-stat-card__label">m² totales</span>
            </div>
            <div className="progreso-stat-card progreso-stat-card--success">
              <span className="progreso-stat-card__number">{vendidos}</span>
              <span className="progreso-stat-card__label">m² vendidos</span>
            </div>
            <div className="progreso-stat-card">
              <span className="progreso-stat-card__number">{disponibles}</span>
              <span className="progreso-stat-card__label">m² disponibles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid section */}
      <section className="section progreso-grid-section" aria-label="Mapa interactivo de la cancha">
        <div className="container">
          <div className="imagen-container">
            <div className="imagen-fondo">
              <img src={imagenCancha} alt="Vista aérea de la cancha del Club Argentino mostrando el progreso de venta de metros cuadrados" className="imagen-principal" />
            </div>

            <div className="cuadricula-overlay" role="grid" aria-label="Cuadrícula de metros cuadrados de la cancha">
              {cuadrados.map((numero) => (
                <div
                  key={numero}
                  className={`cuadrado ${estaComprado(numero) ? 'comprado' : 'disponible'}`}
                  onMouseEnter={() => setHoveredSquare(numero)}
                  onMouseLeave={() => setHoveredSquare(null)}
                  onFocus={() => setHoveredSquare(numero)}
                  onBlur={() => setHoveredSquare(null)}
                  tabIndex={0}
                  role="gridcell"
                  aria-label={`Metro cuadrado ${numero}: ${estaComprado(numero) ? `adquirido por ${obtenerPersona(numero)}` : 'disponible'}`}
                >
                  {hoveredSquare === numero && (
                    <div className="tooltip" style={calcularPosicionTooltip(numero)} role="tooltip">
                      <span className="tooltip-text">
                        {obtenerPersona(numero)}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="progreso-legend" aria-label="Leyenda del mapa">
            <div className="progreso-legend__item">
              <span className="progreso-legend__color progreso-legend__color--vendido" aria-hidden="true"></span>
              <span>Vendido</span>
            </div>
            <div className="progreso-legend__item">
              <span className="progreso-legend__color progreso-legend__color--disponible" aria-hidden="true"></span>
              <span>Disponible</span>
            </div>
          </div>

          {/* CTA */}
          <div className="progreso-cta">
            <p className="progreso-cta__text">
              &ldquo;Sumate a los que ya están dejando su huella&rdquo;
            </p>
            <button
              className="btn btn--primary btn--lg"
              onClick={() => navigate('/comprar')}
              aria-label="Ir a la página de colaboración para adquirir un metro cuadrado"
            >
              Quiero mi m²
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImagenInteractiva;