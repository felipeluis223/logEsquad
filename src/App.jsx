import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

export default function App() {

  return (
    <Router>
      <Routes>
        
        <Route path="" element={<p>login</p>} />
        <Route path="home" element={<p>home</p>} />
        <Route path="stock" element={<p>stock</p>} />
        <Route path="sales" element={<p>sales</p>} />
        <Route path="clients" element={<p>clients</p>} />
        <Route path="profile" element={<p>profile</p>} />

      </Routes>
    </Router>
  )
}
