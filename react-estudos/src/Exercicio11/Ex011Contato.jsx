import React from "react";
import styles from "./Ex011Contato.module.css";
import foto from "../img/contato.jpg";
import Ex011Head from "./Ex011Head";

const Ex011Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Ex011Head title="Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>jeanpaulino.ssp@gmail.com</li>
          <li>(35) 99912-3401</li>
          <li>Rua Ali Perto, 99</li>
        </ul>
      </div>
    </section>
  );
};

export default Ex011Contato;
