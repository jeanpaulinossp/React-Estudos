import React, { useState } from "react";

const PhotoGet = () => {
  const [id, setId] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const resApi = await fetch(
      `https://dogsapi.origamid.dev/json/api/photo/${id}`
    );
    // const resJson = await resApi.json();
    return resApi;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={id}
        onChange={({ target }) => setId(target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};

export default PhotoGet;
