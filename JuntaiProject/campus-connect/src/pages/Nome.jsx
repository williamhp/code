import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Nome() {
  const [nome, setNome] = useState('')
  const [error, setError] = useState('')
  const [concluido, setConcluido] = useState(false)
  const navigate = useNavigate()

  function handleConcluir() {
    if (!nome.trim()) {
      setError('Informe seu nome completo.')
      return
    }
    if (nome.trim().split(' ').length < 2) {
      setError('Informe nome e sobrenome.')
      return
    }
    sessionStorage.setItem('nome', nome.trim())
    setConcluido(true)
  }

  if (concluido) {
    return (
      <div className="card">
        <div className="logo">🎉</div>
        <h1>Bem-vindo!</h1>
        <p className="subtitle">
          Olá, <strong>{sessionStorage.getItem('nome')}</strong>! Seu cadastro foi concluído.
          Agora você faz parte do CampusConnect.
        </p>
        <button className="btn green" onClick={() => {
          sessionStorage.clear()
          navigate('/login')
        }}>
          Voltar ao início
        </button>
      </div>
    )
  }

  return (
    <div className="card">
      <div className="logo">👤</div>
      <h1>Seu nome</h1>
      <p className="step">Passo 3 de 3</p>
      <p className="subtitle">Como seus colegas vão te conhecer</p>

      <div className="field">
        <label htmlFor="nome">Nome completo</label>
        <input
          id="nome"
          type="text"
          placeholder="Ex: Maria Silva"
          value={nome}
          onChange={e => { setNome(e.target.value); setError('') }}
          onKeyDown={e => e.key === 'Enter' && handleConcluir()}
        />
        <p className="error">{error}</p>
      </div>

      <button className="btn green" onClick={handleConcluir}>Concluir cadastro</button>
      <button className="back-link" onClick={() => navigate('/email')}>← Voltar</button>
    </div>
  )
}
