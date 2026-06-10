import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Presentacion.css";
import logo from "../assets/img/logo.png";

// Cargamos todas las imágenes de sponsors automáticamente
const sponsorModules = import.meta.glob('../assets/img/sponsors/*.png', { eager: true });
const sponsorsList = Object.values(sponsorModules).map((mod) => mod.default);

const Presentacion = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const handleVerProgreso = () => {
    navigate('/cuadrados');
  };

  const handleColaborar = () => {
    navigate('/comprar');
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const beneficios = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      ),
      titulo: "Socios y familias",
      descripcion: "Un espacio seguro, moderno y digno para disfrutar del deporte en familia."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 9 7 12 7s5-3 7.5-3a2.5 2.5 0 0 1 0 5H18"/>
          <path d="M18 9v5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"/>
          <path d="M12 16v5"/>
          <path d="M8 21h8"/>
        </svg>
      ),
      titulo: "Jugadores y deportistas",
      descripcion: "Una cancha renovada para entrenar y competir en las mejores condiciones."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
      titulo: "Comunidad y vecinos",
      descripcion: "Marcos Juárez fortalece uno de sus espacios deportivos históricos."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      titulo: "Futuras generaciones",
      descripcion: "Un legado para los chicos y chicas que mañana serán parte de esta historia."
    }
  ];

  const faqs = [
    {
      pregunta: "¿Por qué se renueva el piso del gimnasio?",
      respuesta: "El piso actual tiene más de 60 años y necesita una renovación integral para garantizar la seguridad de los deportistas y mejorar las condiciones de juego y entrenamiento."
    },
    {
      pregunta: "¿Cuánto cuesta colaborar?",
      respuesta: "Cada metro cuadrado tiene un valor de $120.000. Podés adquirir uno o más metros cuadrados para contribuir al proyecto."
    },
    {
      pregunta: "¿Cómo puedo realizar el pago?",
      respuesta: "Aceptamos transferencia bancaria (alias: filial.sm.argentino), Tarjeta Marcos Juárez en hasta 6 cuotas sin interés, o efectivo en la mutual del club."
    },
    {
      pregunta: "¿Cómo sé que mi colaboración fue registrada?",
      respuesta: "Una vez confirmado el pago, tu nombre aparecerá en el cuadrado seleccionado del mapa del proyecto en menos de 24 horas."
    },
    {
      pregunta: "¿Puedo colaborar de otra forma?",
      respuesta: "¡Sí! Compartir esta iniciativa en redes sociales o contarle a amigos y conocidos también es una forma valiosa de ayudar."
    }
  ];

  return (
    <div className="presentacion">
      {/* ===== HERO ===== */}
      <section className="hero" aria-labelledby="hero-titulo">
        <div className="hero__bg" aria-hidden="true"></div>
        <div className="hero__overlay" aria-hidden="true"></div>
        <div className="hero__content container">
          <img src={logo} alt="Escudo Club Argentino" className="hero__logo" />
          <span className="hero__badge">Proyecto Comunitario</span>
          <h1 id="hero-titulo" className="hero__titulo">
            Renovación del Gimnasio
          </h1>
          <p className="hero__subtitulo">
            Club Argentino de Marcos Juárez
          </p>
          <blockquote className="hero__lema">
            <p>&ldquo;No es solo un piso, es una historia&rdquo;</p>
          </blockquote>
          <div className="hero__actions">
            <button
              className="btn btn--primary btn--lg"
              onClick={handleColaborar}
              aria-label="Ir a la sección de colaboración para sumar tu aporte al proyecto"
            >
              Sumate al proyecto
            </button>
            <button
              className="btn btn--outline-light btn--lg"
              onClick={handleVerProgreso}
              aria-label="Ver el progreso actual de venta de metros cuadrados"
            >
              Ver progreso
            </button>
          </div>
        </div>
      </section>

      {/* ===== SPONSORS TICKER ===== */}
      <section className="sponsors-ticker" aria-label="Nuestros sponsors">
        <div className="sponsors-ticker__track">
          {/* Renderizamos la lista de sponsors dos veces para que el scroll sea infinito sin cortes */}
          {[...sponsorsList, ...sponsorsList].map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Sponsor"
              className="sponsors-ticker__logo"
              loading={index < 6 ? 'eager' : 'lazy'}
              decoding="async"
            />
          ))}
        </div>
      </section>

      {/* ===== PROBLEMA / NECESIDAD ===== */}
      <section className="section problema section-divider" aria-labelledby="problema-titulo">
        <div className="container">
          <div className="section-header">
            <span className="section-header__label">El desafío</span>
            <h2 id="problema-titulo" className="section-header__title">
              Más de 60 años de historia nos piden actuar
            </h2>
            <p className="section-header__description">
              El gimnasio del Club Argentino fue testigo del paso de generaciones
              enteras de deportistas, entrenadores y familias. Hoy, el piso necesita
              una renovación integral.
            </p>
          </div>

          <div className="problema__grid">
            <div className="problema__card">
              <div className="problema__card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
              </div>
              <h3>Desgaste del piso</h3>
              <p>Más de seis décadas de uso continuo han deteriorado la superficie, afectando la seguridad y el rendimiento deportivo.</p>
            </div>
            <div className="problema__card">
              <div className="problema__card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Impacto en la comunidad</h3>
              <p>Cientos de chicos, familias y deportistas dependen de este espacio para su desarrollo personal y deportivo.</p>
            </div>
            <div className="problema__card">
              <div className="problema__card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <h3>Necesidad urgente</h3>
              <p>Las condiciones actuales limitan la práctica deportiva segura y el desarrollo de nuevas generaciones de atletas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SOLUCIÓN / PROYECTO ===== */}
      <section className="section solucion section-divider" aria-labelledby="solucion-titulo">
        <div className="container">
          <div className="solucion__content">
            <div className="solucion__text">
              <span className="section-header__label">El proyecto</span>
              <h2 id="solucion-titulo" className="section-header__title">
                Un nuevo piso para un nuevo capítulo
              </h2>
              <p>
                La renovación comprende los 608 m² del gimnasio principal.
                Cada metro cuadrado puede ser apadrinado por socios, empresas,
                familias o cualquier persona que quiera ser parte de esta historia.
              </p>
              <p>
                Al comprar un m², no estás renovando una superficie: estás honrando
                una historia y abriendo paso al futuro del club.
              </p>
              <div className="solucion__stats">
                <div className="solucion__stat">
                  <span className="solucion__stat-number">608</span>
                  <span className="solucion__stat-label">m² totales</span>
                </div>
                <div className="solucion__stat">
                  <span className="solucion__stat-number">$120.000</span>
                  <span className="solucion__stat-label">por m²</span>
                </div>
                <div className="solucion__stat">
                  <span className="solucion__stat-number">60+</span>
                  <span className="solucion__stat-label">años de historia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFICIOS ===== */}
      <section className="section beneficios section-divider" aria-labelledby="beneficios-titulo">
        <div className="container">
          <div className="section-header">
            <span className="section-header__label">Beneficios</span>
            <h2 id="beneficios-titulo" className="section-header__title">
              ¿A quiénes beneficia?
            </h2>
          </div>

          <div className="beneficios__grid">
            {beneficios.map((item, index) => (
              <div key={index} className="beneficio-card animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="beneficio-card__icon" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="beneficio-card__titulo">{item.titulo}</h3>
                <p className="beneficio-card__descripcion">{item.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section cta section-divider" aria-labelledby="cta-titulo">
        <div className="container">
          <div className="cta__content">
            <h2 id="cta-titulo" className="cta__titulo">
              ¿Querés ser parte de esta historia?
            </h2>
            <p className="cta__descripcion">
              Cada metro cuadrado que se suma nos acerca a hacer realidad este sueño.
              Sumate a quienes ya están dejando su huella.
            </p>
            <div className="cta__actions">
              <button
                className="btn btn--accent btn--lg"
                onClick={handleColaborar}
                aria-label="Ir a la página de colaboración para comprar un metro cuadrado"
              >
                Quiero colaborar
              </button>
              <button
                className="btn btn--ghost btn--lg"
                onClick={handleVerProgreso}
                aria-label="Ver cuántos metros cuadrados se vendieron hasta ahora"
              >
                Ver el mapa del progreso
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section faq section-divider" aria-labelledby="faq-titulo">
        <div className="container">
          <div className="section-header">
            <span className="section-header__label">Preguntas frecuentes</span>
            <h2 id="faq-titulo" className="section-header__title">
              ¿Tenés dudas?
            </h2>
          </div>

          <div className="faq__list" role="list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq__item ${openFaq === index ? 'faq__item--open' : ''}`}
                role="listitem"
              >
                <button
                  className="faq__question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span>{faq.pregunta}</span>
                  <svg
                    className="faq__chevron"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className="faq__answer"
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  hidden={openFaq !== index}
                >
                  <p>{faq.respuesta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FIRMA ===== */}
      <section className="section firma-section" aria-labelledby="firma-titulo">
        <div className="container">
          <div className="firma-section__content">
            <p className="firma-section__saludo">Con afecto y esperanza,</p>
            <div className="firma-section__persona">
              <h3 id="firma-titulo">Juan Pablo Holtz</h3>
              <p>Presidente de la Sub Comisión de Basquetbol</p>
              <a
                href="https://wa.me/5493472449260"
                target="_blank"
                rel="noopener noreferrer"
                className="firma-section__telefono"
                aria-label="Contactar a Juan Pablo Holtz por WhatsApp"
              >
                3472 - 449260
              </a>
            </div>
            <div className="firma-section__club">
              <p><strong>Club A. B. y M. Argentino</strong></p>
              <p>Marcos Juárez, Córdoba</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Presentacion;
