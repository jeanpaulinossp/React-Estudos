import React, { useState } from "react";

const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];

const Exercicio08 = () => {
  const [cores, setCores] = useState(["azul", "vermelho"]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  return (
    <form>
      {coresArray.map((cor) => (
        <label key={cor} style={{ textTransform: "capitalize" }}>
          <input
            type="checkbox"
            value={cor}
            checked={cores.includes(cor)}
            onChange={handleChange}
          />
          {cor}
        </label>
      ))}
    </form>
  );
};

export default Exercicio08;
