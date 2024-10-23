const API = "https://api-recados2024.onrender.com";
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login");
const feed = document.getElementById("feed");

function login() {
  if (!email.value || !password.value) {
    return alert("Preencha os campos corretamente.");
  } else {
    event.preventDefault();

    const response = axios
      .post(`${API}/login`, { email: email.value, senha: password.value })
      .then(function (response) {
        localStorage.setItem("user", email.value);
        alert(response.data.message);

        return (window.location.href = "./recados.html");
      })
      .catch(function (error) {
        return alert(error.request.response);
      });
  }
}

// localStorage.setItem("user", "Gabriel");

loginBtn.addEventListener("click", login);
