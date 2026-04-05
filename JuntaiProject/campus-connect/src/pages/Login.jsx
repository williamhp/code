import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [ra, setRa] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleContinue() {
    if (!ra.trim()) {
      setError('Informe seu número de RA.')
      return
    }
    if (!/^\d{6,12}$/.test(ra.trim())) {
      setError('RA inválido. Use apenas números (6 a 12 dígitos).')
      return
    }
    sessionStorage.setItem('ra', ra.trim())
    navigate('/email')
  }

  return (
    <div className="card">
      <div className="logo">🎓</div>
      <h1>CampusConnect</h1>
      <p className="subtitle">Conectando alunos, quebrando o isolamento</p>

      <div className="field">
        <label htmlFor="ra">Número de RA</label>
        <input
          id="ra"
          type="text"
          placeholder="Ex: 2024001234"
          maxLength={12}
          value={ra}
          onChange={e => { setRa(e.target.value); setError('') }}
          onKeyDown={e => e.key === 'Enter' && handleContinue()}
        />
        <p className="error">{error}</p>
      </div>

      <button className="btn" onClick={handleContinue}>Continuar</button>
    </div>
  )
}
