const email = document.querySelector("#email");
const API = "https://api-recados2024.onrender.com/";
const titulo = document.getElementById("title");
const descricao = document.querySelector("#description");
const enviar = document.querySelector("#enviar");

function createNewNote(event) {
  const recado = {};
  axios
    .post("https://api-recados2024.onrender.com/message", {
      email: email.value,
      title: titulo.value,
      description: descricao.value,
    })
    .then((response) => {
      console.log(response);
      email.value = "";
      titulo.value = "";
      descricao.value = "";
      alert(response.data.message);
    })
    .catch((error) => {
      console.log(error);
      alert("Verifique os campos antes de enviar");
    });

  event.preventDefault();
}

enviar.addEventListener("click", createNewNote);
