const apiExercicio07 = async (form) => {
  const resApi = await fetch("https://ranekapi.origamid.dev/json/api/usuario", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // form é o objeto com os dados do formulário
    body: JSON.stringify(form),
  });
  return resApi;
};

export default apiExercicio07;
