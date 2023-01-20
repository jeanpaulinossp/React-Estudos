import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ex011Footer from "./Exercicio11/Ex011Footer";
import Ex011Header from "./Exercicio11/Ex011Header";
import Ex011Produtos from "./Exercicio11/Ex011Produtos";

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

const Exercicio11 = () => {
  return (
    <BrowserRouter>
      <Ex011Header />
      <Routes>
        <Route path="/" element={<Ex011Produtos />} />
      </Routes>
      <Ex011Footer />
    </BrowserRouter>
  );
};

export default Exercicio11;
