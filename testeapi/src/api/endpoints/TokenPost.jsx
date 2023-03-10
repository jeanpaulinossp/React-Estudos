import React, { useState } from "react";

const TokenPost = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    };
    const resApi = await fetch(
      "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
      settings
    );
    const { token: tokenzinho } = await resApi.json();
    setToken(tokenzinho);
    return resApi;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={({ target }) => setUserName(target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button>Enviar</button>
      <p style={{ wordBreak: "break-all" }}>{token}</p>
    </form>
  );
};

export default TokenPost;
