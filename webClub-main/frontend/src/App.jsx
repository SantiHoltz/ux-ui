import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Presentacion from './pages/Presentacion'
import ImagenInteractiva from './pages/ImagenInteractiva'
import Comprar from './pages/Comprar'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        <Navbar />
        <main id="main-content" role="main">
          <Routes>
            <Route path="/" element={<Presentacion />} />
            <Route path="/cuadrados" element={<ImagenInteractiva />} />
            <Route path="/comprar" element={<Comprar />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
