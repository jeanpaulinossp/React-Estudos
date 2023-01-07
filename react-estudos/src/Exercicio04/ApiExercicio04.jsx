const ApiExercicio04 = async (product) => {
  const response = await fetch(
    `https://ranekapi.origamid.dev/json/api/produto/${product}`
  );
  const json = await response.json();
  return json;
};

export default ApiExercicio04;
