const cards = document.querySelectorAll(".card");
const titulo_cards = document.querySelectorAll(".titulo-card");
const descricao_cards = document.querySelectorAll(".descricao-card");
const botoes_editar = document.querySelectorAll(".botao-editar");
const botoes_apagar = document.querySelectorAll(".botao-apagar");

console.log(cards);
console.log(titulo_cards);
console.log(botoes_editar);

cards.forEach((card) => card.classList.add("card-laranja"));
titulo_cards.forEach((titulo) => (titulo.innerText = "Meu card"));
descricao_cards.forEach(
  (descricao) => (descricao.innerText = "Descrição modificada pelo Javascript")
);
descricao_cards.forEach((descricao) =>
  descricao.setAttribute("style", "color:white; padding: 40px 0px")
);

botoes_editar.forEach((btn) => btn.classList.add("btn"));
botoes_editar.forEach((btn) => btn.classList.add("btn-verde"));
botoes_editar.forEach((btn) => btn.addEventListener("click", editarCard));

botoes_apagar.forEach((btn) => btn.classList.add("btn"));
botoes_apagar.forEach((btn) => btn.classList.add("btn-vermelho"));
botoes_apagar.forEach((btn) => btn.addEventListener("click", apagarCard));

function editarCard() {
  alert("Clicou em editar!");
}

function apagarCard() {
  const certeza = confirm("Deseja realmente apagar essa mensagem?");

  if (certeza) {
    alert("Confirmado!");
  } else {
    alert("Cancelou!");
  }
}
