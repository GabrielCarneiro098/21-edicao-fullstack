const API = "https://api-recados2024.onrender.com";
const feed = document.getElementById("feed");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentPage = 1;

function getRecados(currentPage) {
  feed.innerHTML = `<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;

  axios
    .get(
      `${API}/message/${localStorage.getItem(
        "user"
      )}?page=${currentPage}&perPage=5`
    )
    .then(function (response) {
      const userMessages = response.data.notes;
      feed.innerHTML = "";
      if (userMessages.length == 0) {
        feed.innerHTML = `<h1 style="position: fixed; top: 50vh;"> Sem recados cadastrado</h1>`;
        invisibleBtn();
      } else {
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        userMessages.forEach((message) => {
          feed.innerHTML += `
          <div class="recado text-break shadow-lg" messageid="${message.id}">
          <h2>${message.title}</h2>
          <div>
          <p >${message.description}</p>
          <i class="bi bi-pen text-primary" onclick="editarRecado(this.parentNode.parentNode)"></i>
          <i class="bi bi-trash text-danger" onclick="deletarRecado(this.parentNode.parentNode)"></i>
          </div>
          </div>`;
        });

        if (response.data.totalPages == currentPage) {
          nextBtn.style.display = "none";
        }

        if (response.data.currentPage == 1) {
          prevBtn.style.display = "none";
        }
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

function invisibleBtn() {
  prevBtn.style.display = "none";
  nextBtn.style.display = "none";
}

function editarRecado(element) {
  messageID = element.getAttribute("messageid");
  const title = prompt("Novo titulo");
  const description = prompt("Nova descrição");

  axios
    .put(`${API}/message/${messageID}`, {
      email: localStorage.getItem("user"),
      title: title,
      description: description,
    })
    .then(function (response) {
      getRecados();
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function deletarRecado(element) {
  messageID = element.getAttribute("messageid");

  axios
    .delete(`${API}/message/${messageID}`)
    .then(function (response) {
      getRecados();
    })
    .catch(function (error) {
      console.log(error);
    });
}

function prevPage() {
  currentPage--;

  getRecados(currentPage);
}

function nextPage() {
  currentPage++;

  getRecados(currentPage);
}

prevBtn.addEventListener("click", prevPage);
nextBtn.addEventListener("click", nextPage);

getRecados(currentPage);
