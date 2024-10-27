const API = "https://api-recados2024.onrender.com";
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login");
const form = document.getElementById("form");
const messageErro = document.getElementById("messageError");

function login() {
  event.preventDefault();
  messageErro.style.display = "none";
  if (!email.value || !password.value) {
    messageError.style.display = "block";
    messageError.innerHTML = `<i class="bi bi-exclamation-circle"></i> ${"Preencha os campos corretamente."}`;
  } else {
    const response = axios
      .post(`${API}/login`, { email: email.value, senha: password.value })
      .then(function (response) {
        localStorage.setItem("user", email.value);
        alert(response.data.message);

        return (window.location.href = "./recados.html");
      })
      .catch(function (error) {
        console.log(error.response.data.error);
        messageErro.style.display = "block";
        messageErro.innerHTML = `<i class="bi bi-exclamation-circle"></i> ${error.response.data.error}`;
      });
  }
}

// localStorage.setItem("user", "Gabriel");

loginBtn.addEventListener("click", login);
