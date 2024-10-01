import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Home from './templates/Home'

export default function App() {

  // Aplicando autenticação de login - Mockado
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        
        <Route path="" element={<p>login</p>} />

        <Route path="home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} >
          <Route path="stock" element={<p>stock</p>} />
          <Route path="sales" element={<p>sales</p>} />
          <Route path="clients" element={<p>clients</p>} />
          <Route path="profile" element={<p>profile</p>} />
        </Route>

        <Route path="*" element={<p>Not Found - 404</p>} />

      </Routes>
    </Router>
  )
}
