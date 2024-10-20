const zerarBtn = document.getElementById("zerar");
const incrementoBtn = document.getElementById("incremento");
const contador = document.getElementById("contador");
let conta = 0;

function incrementar() {
  conta++;
  contador.innerHTML = `O contador está com ${conta} cliques.`;
}

function zerar() {
  conta = 0;
  contador.innerHTML = `O contador está com ${conta} cliques.`;
}

incrementoBtn.addEventListener("click", incrementar);
zerarBtn.addEventListener("click", zerar);
