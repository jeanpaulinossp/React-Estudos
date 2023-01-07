import React from "react";

const RenderProduto = ({ dados }) => {
  return (
    <>
      <h1>{dados.nome}</h1>
      <span>R$ {dados.preco}</span>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
    </>
  );
};

export default RenderProduto;
