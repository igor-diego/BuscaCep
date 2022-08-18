import React from 'react'
import { useState } from 'react'

export const BuscaCep = () => {
    const [cep, setCep] = useState()

    async function handleCep() {
        const resposta = await fetch('https://viacep.com.br/ws/01001000/json/')
        const json = await resposta.json()
        
    }
  return (
    <div></div>
  )
}
