import React from 'react';

const Card = ({ cep, logradouro, bairro, localidade, uf }) => {
  /*destructing */
  return (
    <div>
      <h2>CEP: {cep}</h2>
      <h2>UF: {uf}</h2>
      <h2>Rua: {logradouro}</h2>
      <h3>Bairro: {bairro}</h3>
      <h3>Cidade: {localidade}</h3>
      <hr></hr>
    </div>
  );
};

export default Card;