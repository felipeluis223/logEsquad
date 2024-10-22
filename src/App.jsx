import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Home from './templates/Home'
import Login from './components/Login'
import Profile from './components/Profile';

export default function App() {

  // Aplicando autenticação de login - Mockado
  const [ isAuthenticated, setIsAuthenticated ] = useState(localStorage.getItem("authenticated") || false);

  // Usuário e senha para o acesso do sistema:
  const adminData = { username:'admin', password:'admin' };

  // Login do sistema - Realizando a verificação dos dados e armazenando no localStorage:
  const handleLogin = (username, password)=>{
    if(username == adminData.username && password == adminData.password){
      setIsAuthenticated(true);
      localStorage.setItem('authenticated', true)
      return true;
    }else{
      alert("Credenciais inválidas");
    }
  }

  // Logout do sistema:
  const handleLogout = ()=>{
    setIsAuthenticated(false)
    localStorage.removeItem('authenticated')
  }

  return (
    <Router>
      <Routes>
        
        <Route path="" element={<Login onLogin={handleLogin} />} />

        <Route path="home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} >
          <Route path="" element={<p>home</p>} />
          <Route path="stock" element={<p>stock</p>} />
          <Route path="sales" element={<p>sales</p>} />
          <Route path="clients" element={<p>clients</p>} />
          <Route path="profile" element={<Profile onLogout={handleLogout} />} />
        </Route>

        <Route path="*" element={<p>Not Found - 404</p>} />

      </Routes>
    </Router>
  )
}
