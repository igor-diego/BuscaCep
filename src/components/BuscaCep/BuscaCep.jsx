import React from 'react'
import { useState } from 'react'

export const BuscaCep = () => {
  const [cep, setCep] = useState()
  const inputCep = (e) => {
    setCep(e.target.value)
  }

  async function handleCep() {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const json = await resposta.json()
    console.log(json);
    setCep(json)

  }

  return (
    <div>
      <input type="text" onChange={inputCep} />
      <button onClick={handleCep}>buscar</button>
      <div>
        <h2>{cep ? cep.logradouro : ''}</h2>
        <h2>{cep ? cep.bairro : ''}</h2>
        <h2>{cep ? cep.localidade : ''}</h2>
      </div>
    </div>
  )
}
