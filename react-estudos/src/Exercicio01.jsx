export default function Exercicio01() {
  // Mostre os dados da aplicação, como aprensetado no vídeo
  // Não utilize CSS externo, use o style para mudar as cores
  // Se a situação estiver ativa pinte de verde, inativa vermelho
  // Se o gasto for maior que 10000 mostre uma mensagem

  const luana = {
    cliente: "Luana",
    idade: 27,
    compras: [
      { nome: "Notebook", preco: "R$ 2500" },
      { nome: "Geladeira", preco: "R$ 3000" },
      { nome: "Smartphone", preco: "R$ 1500" },
    ],
    ativa: true,
  };

  const mario = {
    cliente: "Mario",
    idade: 31,
    compras: [
      { nome: "Notebook", preco: "R$ 2500" },
      { nome: "Geladeira", preco: "R$ 3000" },
      { nome: "Smartphone", preco: "R$ 1500" },
      { nome: "Guitarra", preco: "R$ 3500" },
    ],
    ativa: false,
  };

  const dados = mario;

  // minha solução
  function somaProdutos(dados) {
    let soma = 0;
    dados.compras.map((item) => {
      const newItem = parseInt(item.preco.replace("R$ ", ""));
      soma += newItem;
    });
    return soma;
  }

  // solução do exercicio
  const total = dados.compras
    .map((item) => Number(item.preco.replace("R$ ", "")))
    .reduce((a, b) => a + b);

  return (
    <>
      <h1>Exercicio 01</h1>
      <h3>Nome: {dados.cliente}</h3>
      <h3>Idade: {dados.idade}</h3>
      <h3>
        Situação:{" "}
        <span style={{ color: dados.ativa ? "green" : "red" }}>
          {dados.ativa ? "Ativa" : "Inativa"}
        </span>
      </h3>
      <h3>Total Gasto: R$ {somaProdutos(dados)}</h3>
      {total > 10000 && <h3>Você está gastando muito!</h3>}
    </>
  );
}
