const valor_base = document.getElementById("valor_base");
const valor_transporte = document.getElementById("valor_transporte");
const valor_alimentacao = document.getElementById("valor_alimentacao");
const valor_receita = document.getElementById("valor_receita");
const valor_automovel = document.getElementById("valor_automovel");
const faltas = document.getElementById("faltas");
const valor_descontos = document.getElementById("valor_descontos");
const valor_total = document.getElementById("valor_total");
const btn_calcular = document.getElementById("btn_calcular");

function calcular() {
  valor_receita.value =
    parseFloat(valor_base.value) +
    parseFloat(valor_transporte.value) +
    parseFloat(valor_alimentacao.value);

  valor_descontos.value =
    parseFloat(valor_automovel.value) + parseFloat(faltas.value);

  valor_total.value = valor_receita.value - valor_descontos.value;
}

btn_calcular.addEventListener("click", calcular);
