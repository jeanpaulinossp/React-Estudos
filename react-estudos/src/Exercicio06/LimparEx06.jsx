import React, { useContext } from "react";
import { ContextExercicio06 } from "./ContextExercicio06";

const LimparEx06 = () => {
  const { limparDados } = useContext(ContextExercicio06);
  return <button onClick={limparDados}>Limpar</button>;
};

export default LimparEx06;
