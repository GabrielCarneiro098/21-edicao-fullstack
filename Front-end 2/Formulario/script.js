const nome = document.getElementById("nome");
const endereco = document.getElementById("endereco");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");

const curriculo = document.getElementById("curriculo");

const enviar = document.getElementById("enviar");
const limpar = document.getElementById("limpar");

function enviarFomulario() {
  event.preventDefault();
  if (nome.value == "" || endereco.value == "" || cidade.value == "") {
    return alert("Preencha os campos corretamente.");
  } else {
    const interesses = Array.from(
      document.querySelectorAll('input[name="interesse"]:checked')
    );

    console.log(interesses);
    const dados = {
      nome: nome.value,
      endereço: endereco.value,
      cidade: cidade.value,
      estado: estado.value,
      cargo: (cargo = document.querySelector(
        'input[name="cargo"]:checked'
      ).value),
      interesse: interesses.map((checkbox) => checkbox.value),
      mini_curriculo: curriculo.value,
    };

    console.log(dados);
  }
}

function limparFormulario() {
  nome.value = "";
  endereco.value = "";
  cidade.value = "";
  document
    .querySelectorAll('input[name="interesse"]')
    .forEach((checkbox) => (checkbox.checked = false));
}

enviar.addEventListener("click", enviarFomulario);
limpar.addEventListener("click", limparFormulario);
