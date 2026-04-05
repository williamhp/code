import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Email() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleContinue() {
    if (!email.trim()) {
      setError('Informe seu e-mail.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('E-mail inválido.')
      return
    }
    sessionStorage.setItem('email', email.trim())
    navigate('/nome')
  }

  return (
    <div className="card">
      <div className="logo">📧</div>
      <h1>Seu e-mail</h1>
      <p className="step">Passo 2 de 3</p>
      <p className="subtitle">Use seu e-mail institucional ou pessoal</p>

      <div className="field">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          placeholder="aluno@faculdade.edu.br"
          value={email}
          onChange={e => { setEmail(e.target.value); setError('') }}
          onKeyDown={e => e.key === 'Enter' && handleContinue()}
        />
        <p className="error">{error}</p>
      </div>

      <button className="btn" onClick={handleContinue}>Continuar</button>
      <button className="back-link" onClick={() => navigate('/login')}>← Voltar</button>
    </div>
  )
}
