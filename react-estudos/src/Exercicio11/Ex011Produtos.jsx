import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Ex011Head from "./Ex011Head";
import styles from "./Ex011Produtos.module.css";

const Ex011Produtos = () => {
  const [produtos, setProdutos] = useState(null);

  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((res) => res.json())
      .then((json) => setProdutos(json));
  }, []);

  if (produtos === null) return null;
  return (
    <section className={`${styles.produtos} animeLeft`}>
      <Ex011Head title={`Minha Loja`} description={`Descrição da minha loja`} />
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>
      ))}
    </section>
  );
};

export default Ex011Produtos;
