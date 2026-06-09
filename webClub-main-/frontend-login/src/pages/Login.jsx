import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import './Login.css';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [errorUsuario, setErrorUsuario] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorGeneral, setErrorGeneral] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();

  // Credenciales desde variables de entorno
  const USUARIO_ADMIN = import.meta.env.VITE_ADMIN_USERNAME;
  const PASSWORD_ADMIN = import.meta.env.VITE_ADMIN_PASSWORD;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset errores
    setErrorUsuario('');
    setErrorPassword('');
    setErrorGeneral('');
    
    let hasError = false;

    if (!usuario.trim()) {
      setErrorUsuario('Completá este campo para continuar.');
      hasError = true;
    }
    
    if (!password.trim()) {
      setErrorPassword('Completá este campo para continuar.');
      hasError = true;
    }

    if (hasError) return;

    setIsLoading(true);

    // Simulamos un pequeño retardo para feedback visual de carga
    await new Promise(resolve => setTimeout(resolve, 800));

    if (usuario === USUARIO_ADMIN && password === PASSWORD_ADMIN) {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/admin');
    } else {
      setErrorGeneral('Los datos ingresados no son correctos.');
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setMostrarPassword(!mostrarPassword);
  };

  return (
    <div className="login-page">
      <main className="login-container">
        <div className="login-card">
          <div className="login-header">
            <img src={logo} alt="Escudo Club Argentino" className="login-logo" />
            <h1 className="login-title">Acceso administrativo</h1>
            <p className="login-description">Ingresá con las credenciales del administrador</p>
          </div>

          {errorGeneral && (
            <div className="error-alert" role="alert" aria-live="assertive">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="error-icon">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <span>{errorGeneral}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className={`form-group ${errorUsuario ? 'has-error' : ''}`}>
              <label htmlFor="usuario" className="form-label">Usuario</label>
              <input
                type="text"
                id="usuario"
                className="form-input"
                value={usuario}
                onChange={(e) => {
                  setUsuario(e.target.value);
                  if (errorUsuario) setErrorUsuario('');
                  if (errorGeneral) setErrorGeneral('');
                }}
                placeholder="Usuario administrador"
                autoComplete="username"
                aria-invalid={!!errorUsuario}
                aria-describedby={errorUsuario ? "usuario-error" : undefined}
                disabled={isLoading}
              />
              {errorUsuario && (
                <span id="usuario-error" className="field-error" aria-live="polite">
                  {errorUsuario}
                </span>
              )}
            </div>

            <div className={`form-group ${errorPassword ? 'has-error' : ''}`}>
              <label htmlFor="password" className="form-label">Contraseña</label>
              <div className="password-input-wrapper">
                <input
                  type={mostrarPassword ? "text" : "password"}
                  id="password"
                  className="form-input password-input"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errorPassword) setErrorPassword('');
                    if (errorGeneral) setErrorGeneral('');
                  }}
                  placeholder="Ingresá la contraseña"
                  autoComplete="current-password"
                  aria-invalid={!!errorPassword}
                  aria-describedby={errorPassword ? "password-error" : undefined}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
                  aria-label={mostrarPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                  aria-pressed={mostrarPassword}
                  disabled={isLoading}
                >
                  {mostrarPassword ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  )}
                </button>
              </div>
              {errorPassword && (
                <span id="password-error" className="field-error" aria-live="polite">
                  {errorPassword}
                </span>
              )}
            </div>

            <button 
              type="submit" 
              className={`btn btn--primary btn--lg btn--full ${isLoading ? 'btn--loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="spinner" aria-hidden="true"></span>
                  <span>Verificando...</span>
                </>
              ) : (
                'Ingresar al panel'
              )}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login; 