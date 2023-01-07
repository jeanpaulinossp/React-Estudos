import React from "react";
import Home from "./Exercicio03/Home";
import Produtos from "./Exercicio03/Produtos";

const { pathname } = window.location;

const Exercicio03 = () => {
  return (
    <>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/produtos">Produtos</a>
        </li>
      </ul>

      {pathname === "/produtos" ? <Produtos /> : <Home />}
    </>
  );
};

export default Exercicio03;
