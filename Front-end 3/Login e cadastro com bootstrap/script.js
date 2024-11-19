const API = "https://api-recados2024.onrender.com";
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const cadastrar = document.getElementById("cadastrar");

function teste() {
  event.preventDefault();

  axios
    .post(`${API}/signup`, {
      nome: nome.value,
      email: email.value,
      senha: senha.value,
    })
    .then(function (response) {
      window.location.href = "./login.html";
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  console.log(nome.value, email.value, senha.value);
}

cadastrar.addEventListener("click", teste);
