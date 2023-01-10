// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

import React, { useContext } from "react";
import { ContextExercicio06 } from "./Exercicio06/ContextExercicio06";

const Exercicio06 = () => {
  const global = useContext(ContextExercicio06);
  if (global.dados === null) return null;
  return (
    <div>
      Produto:{" "}
      {global.dados.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </div>
  );
};

export default Exercicio06;
