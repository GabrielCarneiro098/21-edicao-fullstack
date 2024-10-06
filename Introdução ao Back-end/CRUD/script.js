const exibir = document.getElementById("exibir");
const adicionar = document.getElementById("adicionar");
const listar = document.getElementById("listar");
const filtrar = document.getElementById("filtrar");
const editar = document.getElementById("editar");
const deletar = document.getElementById("deletar");

const carros = [
  {
    id: 0,
    modelo: "uno",
    marca: "fiat",
    ano: "2015",
    cor: "Vermelho",
    valor: 50000.0,
  },
];

let id = 1;

function criarVeiculo() {
  const modelo = prompt("Digite modelo do carro");
  const marca = prompt("Digite marca do carro");
  const ano = prompt("Digite ano de fabrica do carro");
  const cor = prompt("Digite cor do carro");
  const valor = prompt("Digite valor do carro");

  const novoVeiculo = {
    id,
    modelo,
    marca,
    ano,
    cor,
    valor,
  };

  id++;
  carros.push(novoVeiculo);
}

function listarVeiculos() {
  exibir.innerHTML = "";
  carros.sort((a, b) => a.valor - b.valor);
  carros.forEach((carro) => {
    exibir.innerHTML += `<div>ID: ${carro.id} | Modelo: ${carro.modelo} | Marca: ${carro.marca} | Ano: ${carro.ano} | Cor: ${carro.cor} | Preço: R$${carro.valor} </div>`;
  });
  carros.sort((a, b) => a.valor - b.valor);
}

function filtrarMarca() {
  exibir.innerHTML = "";
  const marca = prompt("Digite marca para filtrar carros");
  const carrosFiltrados = carros.filter((carro) => carro.marca == marca);
  carrosFiltrados.sort((a, b) => a.valor - b.valor);
  carrosFiltrados.forEach((carro) => {
    exibir.innerHTML += `<div>ID: ${carro.id} | Modelo: ${carro.modelo} | Marca: ${carro.marca} | Ano: ${carro.ano} | Cor: ${carro.cor} | Preço: R$${carro.valor} </div>`;
  });

  carrosFiltrados.sort((a, b) => a.valor - b.valor);
}

function atualizarVeiculo() {
  const carroID = prompt("Qual carro deseja atualizar?(procure pelo ID");

  const findID = carros.findIndex((carro) => carro.id === Number(carroID));

  if (findID === -1) {
    alert("Veículo, não encontrado");
  } else {
    const cor = prompt("Digite nova cor do veículo");
    const valor = prompt("Digite novo valor do veículo");
    carros[findID].cor = cor;
    carros[findID].valor = valor;
    carros.sort((a, b) => a.valor - b.valor);
    listarVeiculos();
  }
}

function removerVeiculo() {
  const carroID = Number(prompt("Qual carro deseja remover?(procure pelo ID"));

  const findID = carros.findIndex((carro) => carro.id === carroID);
  console.log(findID);
  if (findID === -1) {
    alert("Veículo, não encontrado");
  } else {
    carros.splice(findID, 1);
  }
  carros.sort((a, b) => a.valor - b.valor);
  listarVeiculos();
}

listar.addEventListener("click", listarVeiculos);
adicionar.addEventListener("click", criarVeiculo);
filtrar.addEventListener("click", filtrarMarca);
editar.addEventListener("click", atualizarVeiculo);
deletar.addEventListener("click", removerVeiculo);
