import React, { useState } from "react";
import RenderProduto from "./Exercicio04/RenderProdutos";
import ApiExercicio04 from "./Exercicio04/ApiExercicio04";
import "./style/style.css";

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const Exercicio04 = () => {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(null);

  async function handleClick(event) {
    setLoading(true);
    const res = await ApiExercicio04(event.target.innerText);
    setDados(res);
    setLoading(false);
  }

  return (
    <>
      <button onClick={handleClick} style={{ margin: ".5rem" }}>
        notebook
      </button>
      <button onClick={handleClick} style={{ margin: ".5rem" }}>
        smartphone
      </button>
      <button onClick={handleClick} style={{ margin: ".5rem" }}>
        tablet
      </button>
      {loading && <p>Carregando...</p>}
      {!loading && dados && <RenderProduto dados={dados} />}
    </>
  );
};

export default Exercicio04;
