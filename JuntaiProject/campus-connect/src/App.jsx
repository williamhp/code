import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Email from './pages/Email'
import Nome from './pages/Nome'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/email" element={<Email />} />
      <Route path="/nome" element={<Nome />} />
    </Routes>
  )
}
