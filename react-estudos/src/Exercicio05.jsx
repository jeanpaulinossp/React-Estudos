// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

import React, { useEffect, useState } from "react";
import ProductEx05 from "./Exercicio05/ProductEx05";
import "./style/style.css";

const Exercicio05 = () => {
  const [produto, setProduto] = useState(null);
  const produtoLocal = window.localStorage.getItem("produto");

  useEffect(() => {
    produtoLocal !== null && setProduto(produtoLocal);
  }, []);

  useEffect(() => {
    produto !== null && window.localStorage.setItem("produto", produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <>
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick} style={{ marginRight: "1rem" }}>
        notebook
      </button>
      <button onClick={handleClick}>smartphone</button>
      {<ProductEx05 produto={produto} />}
    </>
  );
};

export default Exercicio05;
