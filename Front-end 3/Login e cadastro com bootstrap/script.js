const API = "https://api-recados2024.onrender.com";
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const requestMessage = document.getElementById("requestMessage");
const response = document.getElementById("response");
const cadastrar = document.getElementById("cadastrar");

function cadastro() {
  event.preventDefault();
  requestMessage.style.display = "none";

  axios
    .post(`${API}/signup`, {
      nome: nome.value,
      email: email.value,
      senha: senha.value,
    })
    .then(function (response) {
      alert(`Conta criada com sucesso!`);
      window.location.href = "./login.html";
    })
    .catch(function (error) {
      response.innerText = error.response.data.error;
      requestMessage.style.display = "block";
    });
}

cadastrar.addEventListener("click", cadastro);
