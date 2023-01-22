import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ex011Footer from "./Exercicio11/Ex011Footer";
import Ex011Header from "./Exercicio11/Ex011Header";
import Ex011Produtos from "./Exercicio11/Ex011Produtos";
import Ex011Contato from "./Exercicio11/Ex011Contato";

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

const Exercicio11 = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Ex011Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Ex011Produtos />} />
            <Route path="contato" element={<Ex011Contato />} />
          </Routes>
        </div>

        <Ex011Footer />
      </BrowserRouter>
    </div>
  );
};

export default Exercicio11;
