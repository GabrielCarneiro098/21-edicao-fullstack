const users = [{ id: 0, nome: "fulano", email: "teste@teste", senha: "123" }];
const posts = [
  { nome: "fulano", titulo: "teste", descricao: "testando" },
  { nome: "Bertano", titulo: "teste", descricao: "testando" },
  { nome: "fulano", titulo: "teste1", descricao: "testando1" },
];
let userLogged = {};
var id = 1;

function signUser() {
  const nome = prompt("digite o seu nome");
  const email = prompt("digite o seu email");
  const senha = parseInt(prompt("digite sua senha"));

  for (const user of users) {
    if (user.nome == nome || user.email == email) {
      console.log("Este email já esta cadastrado. Insira outro email");
    } else {
      users.push({
        id,
        nome,
        email,
        senha,
      });
      id++;
    }
  }

  console.log(users);
}

function validationLogin(email, senha) {
  const findUser = users.find(
    (user) => user.email == email && user.senha == senha
  );
  userLogged = findUser;
  return findUser;
}

function postMessage() {
  const titulo = prompt("Titulo do recado.");
  const descricao = prompt("Descrição do recado.");

  posts.push({
    userID: userLogged.id,
    nome: userLogged.nome,
    titulo,
    descricao,
  });
}

function listPosts(nome) {
  const filterdPosts = posts.filter((post) => post.nome == nome);
  console.log(filterdPosts);
}

function postUpdate() {}
