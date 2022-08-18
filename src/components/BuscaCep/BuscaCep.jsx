import React from 'react'
import { useState } from 'react'

export const BuscaCep = () => {
    const [cep, setCep] = useState()
    const inputCep = (e)=> {
      setCep(e.target.value)
  }

    async function handleCep() {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const json = await resposta.json()
        console.log(json);
        setCep()
        
    }
  return (
    <div>
    <input type="text" onChange={inputCep} />
    <button onClick={handleCep}>buscar</button>
    {/* <form action="">{cep ? cep.logradouro : 'carregando'}</form> */}
    <h1>{cep ? cep.logradouro : 'carregando'}</h1>
    </div>
  )
}
