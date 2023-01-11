// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado
// Essa é a função utilizado para realizar o POST

import React, { useState } from "react";
import { Form } from "./Exercicio07/Form";
import apiExercicio07 from "./Exercicio07/ApiExercicio07";

const Exercicio07 = () => {
  const [form, setForm] = useState(
    Form.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: "",
      };
    }, {})
  );
  const [response, setResponse] = useState(null);

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const resApi = await apiExercicio07(form);
    setResponse(resApi);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {Form.map(({ id, label, type }) => (
          <div key={id}>
            <label htmlFor={id}>{label}</label>
            <input
              type={type}
              id={id}
              value={form[id]}
              onChange={handleChange}
            />
          </div>
        ))}
        {response && response.ok && <p>Formulário Enviado!</p>}
        <button>Enviar</button>
      </form>
    </>
  );
};

export default Exercicio07;

// Mostre uma mensagem na tela, caso a resposta da API seja positiva
