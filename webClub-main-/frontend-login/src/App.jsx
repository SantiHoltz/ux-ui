import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Login from './pages/Login'
import Admin from './pages/Admin'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        {/* Login: sin Navbar, pantalla completa */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={
          <div className="app">
            <Login />
          </div>
        } />

        {/* Admin: con Navbar del club */}
        <Route path="/admin" element={
          <ProtectedRoute>
            <div className="app app--with-header">
              <Navbar />
              <Admin />
            </div>
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  )
}

export default App
