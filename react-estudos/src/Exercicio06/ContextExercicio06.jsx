import React, { useEffect, useState } from "react";

export const ContextExercicio06 = React.createContext();

export const Exercicio06Storage = ({ children }) => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/")
      .then((res) => res.json())
      .then((json) => setDados(json));
  }, []);

  function limparDados() {
    setDados(null);
  }

  return (
    <ContextExercicio06.Provider value={{ dados, limparDados }}>
      {children}
    </ContextExercicio06.Provider>
  );
};
