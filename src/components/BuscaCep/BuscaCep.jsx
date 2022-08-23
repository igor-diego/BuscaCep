import React from 'react'
import { useState } from 'react'
import S from '../BuscaCep/BuscaCep.module.css';
import Card from '../Card/Card';

export const BuscaCep = () => {

  const [card, setNewCard] = useState('');
  const [historico, setHistorico] = useState([]);

  const [cep, setCep] = useState()
  const inputCep = (e) => {
    setCep(e.target.value)
  }

  async function handleCep() {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const json = await resposta.json()
    console.log(json);
    setCep(json)
    setNewCard(json);
    setHistorico([...historico, json]);

  }

  document.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {

      var btn = document.querySelector("#submit");

      btn.click();

    }
  });

  return (
    <div className={S.div}>
      <section className={S.section}>
        <div className={S.send}>
          <h2>Insira um CEP</h2>
          <input
            className={S.input}
            defaultValue={cep}
            type="text"
            placeholder="Seu CEP"
            onChange={inputCep}
          />
          <button className={S.btn} onClick={handleCep} type='submit' id='submit'>Enviar</button>
        </div>
      </section>
      <section className={S.output}>
        <div className={S.card}>
          {card ? (
            <Card
              cep={card.cep}
              uf={card.uf}
              logradouro={card.logradouro}
              localidade={card.localidade}
              bairro={card.bairro}
            />
          ) : (
            ''
          )}
        </div>

        <div className={S.history}>
          {historico
            ? historico.map((item) => (
              <Card
                cep={item.cep}
                uf={item.uf}
                logradouro={item.logradouro}
                localidade={item.localidade}
                bairro={item.bairro}
                />
                ))
                : ''}
        </div>
      </section>{' '}
    </div>
  );
};

