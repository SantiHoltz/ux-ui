import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

const Presentacion = lazy(() => import('./pages/Presentacion'))
const ImagenInteractiva = lazy(() => import('./pages/ImagenInteractiva'))
const Comprar = lazy(() => import('./pages/Comprar'))

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        <Navbar />
        <main id="main-content" role="main">
          <Suspense fallback={<div className="route-loading" role="status">Cargando...</div>}>
            <Routes>
              <Route path="/" element={<Presentacion />} />
              <Route path="/cuadrados" element={<ImagenInteractiva />} />
              <Route path="/comprar" element={<Comprar />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
