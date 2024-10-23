const API = "https://api-recados2024.onrender.com";
const feed = document.getElementById("feed");

function getRecados() {
  axios
    .get(`${API}/message/${localStorage.getItem("user")}`)
    .then(function (response) {
      const userMessages = response.data.recadosFiltrados;
      feed.innerHTML = "";
      userMessages.forEach((message) => {
        feed.innerHTML += `<div class="recado">
        <h2>${message.title}</h2>
        <p>${message.description}</p>
      </div>`;
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}

console.log(localStorage.getItem("user"));

getRecados();
