// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500

const produtos = [
  {
    id: 1,
    nome: "Smartphone",
    preco: "R$ 2000",
    cores: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    id: 2,
    nome: "Notebook",
    preco: "R$ 3000",
    cores: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    id: 3,
    nome: "Tablet",
    preco: "R$ 1500",
    cores: ["#365069", "#47c1c8", "#f95786"],
  },
];

const Exercicio02 = () => {
  const dados = produtos.filter(
    ({ preco }) => Number(preco.replace("R$ ", "")) > 1500
  );

  return (
    <section>
      {dados.map(({ id, nome, preco, cores }) => (
        <div key={id}>
          <h1>{nome}</h1>
          <p>Preço: {preco}</p>
          <ul>
            {cores.map((cor) => (
              <li key={cor} style={{ backgroundColor: cor, color: "#fff" }}>
                {cor}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

// minha solução do exercicio
// const Exercicio2 = () => {
//   let precoItem = 0;
//   return (
//     <>
//       {produtos.map((item) => {
//         precoItem = Number(item.preco.replace("R$ ", ""));
//         if (precoItem > 1500) {
//           return (
//             <>
//               <h3>{item.nome}</h3>
//               <h4>Preço: R$ {precoItem}</h4>
//               <div style={{ backgroundColor: item.cores[0], color: "#fff" }}>
//                 <h5>{item.cores[0]}</h5>
//               </div>
//               <div style={{ backgroundColor: item.cores[1], color: "#fff" }}>
//                 <h5>{item.cores[1]}</h5>
//               </div>
//               <div style={{ backgroundColor: item.cores[2], color: "#fff" }}>
//                 <h5>{item.cores[2]}</h5>
//               </div>
//             </>
//           );
//         }
//       })}
//     </>
//   );
// };

export default Exercicio02;
