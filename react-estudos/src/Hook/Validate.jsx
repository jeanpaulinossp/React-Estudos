import { useState } from "react";

const typesValidates = {
  cep: {
    regex: !/^\d{5}-?\d{3}$/,
    message: "Cep inválido",
  },
  email: {
    regex:
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
    message: "Email inválido",
  },
  cpf: {
    regex: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
    message: "CPF inválido",
  },
  cnpj: {
    regex: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
    message: "CNPJ inválido",
  },
  cpfCnpj: {
    regex: /(^\d{3}\.\d{3}\.\d{3}-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$)/,
    message: "CPF ou CNPJ inválido",
  },
};

const useValidate = (type) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  function validate(value) {
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (
      typesValidates[type] &&
      !typesValidates[type].regex.test(value)
    ) {
      setError(typesValidates[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validade: () => validate(value),
  };
};

export default useValidate;
