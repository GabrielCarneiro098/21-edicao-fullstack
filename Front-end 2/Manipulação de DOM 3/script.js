const btn = document.getElementById("btn");
const text = document.getElementById("text");

function mudarTexto() {
  let nome = prompt("Digite seu nome.");

  text.innerText = `E aí ${nome}! Você está deixando o seu site dinâmico.`;
}

btn.addEventListener("click", mudarTexto);
