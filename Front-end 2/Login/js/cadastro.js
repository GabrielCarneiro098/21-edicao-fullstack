const API = "https://api-recados2024.onrender.com";
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cadastrarBtn = document.getElementById("cadastrarBtn");
const messageError = document.getElementById("messageError");

function cadastrarUsuario() {
  event.preventDefault();
  messageError.style.display = "none";

  if (!nome.value || !email.value || !password.value) {
    messageError.style.display = "block";
    messageError.innerHTML = `<i class="bi bi-exclamation-circle"></i> ${"Preencha os campos corretamente."}`;
  } else {
    const response = axios
      .post(`${API}/signup`, {
        nome: nome.value,
        email: email.value,
        senha: password.value,
      })
      .then(function (response) {
        alert(response.data.message);
        return (window.location.href = "./index.html");
      })
      .catch(function (error) {
        messageError.style.display = "block";
        messageError.innerHTML = `<i class="bi bi-exclamation-circle"></i> ${error.response.data.erro}`;
      });
  }
}

cadastrarBtn.addEventListener("click", cadastrarUsuario);
