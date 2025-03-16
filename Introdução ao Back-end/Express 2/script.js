import express from "express";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

const veiculos = [];
const usuarios = [];

app.get("/", (req, res) => {
  res.status(200).send("CRUD de veículos");
});

// Cadastrar veículo
app.post("/veiculo", (req, res) => {
  const { modelo, marca, ano, cor, preco } = req.body;

  if (!marca || !modelo || !ano || !cor || !preco) {
    return res.status(400).send("Todos os campos são obrigatórios.");
  } else {
    const novoVeiculo = {
      id: uuidv4(),
      modelo,
      marca,
      ano,
      cor,
      preco,
    };

    veiculos.push(novoVeiculo);

    res.status(200).json("Veiculo cadastrado com sucesso.");
  }
});

// Ler veículos
app.get("/veiculo", (req, res) => {
  if (veiculos.length == 0) {
    res.status(200).send("Não há veicúlos cadastrados");
  } else {
    const listaVeiculos = veiculos.map((veiculo) => {
      return `ID: ${veiculo.id} | Modelo: ${veiculo.modelo} | Marca: ${veiculo.marca} | Ano: ${veiculo.ano} | Cor: ${veiculo.cor} | Preço: ${veiculo.preco}`;
    });
    res.status(200).send(listaVeiculos.join("\n"));
  }
});

// Filtrar veículos
app.get("/veiculo/filtrar", (req, res) => {
  const marca = req.query.marca;
  if (!marca) {
    return res.status(400).send("Forneça marca para filtrar.");
  }

  const veiculosFiltrados = veiculos.filter(
    (veiculo) => veiculo.marca.toLowerCase() === marca.toLowerCase()
  );

  if (veiculosFiltrados.length === 0) {
    return res.status(404).send("Nenhum veículo cadastrado com essa marca");
  }

  const listaVeiculos = veiculosFiltrados.map((veiculo) => {
    return `ID: ${veiculo.id} | Modelo: ${veiculo.modelo} | Cor: ${veiculo.cor} | Preço: ${veiculo.preco}`;
  });

  res.send(listaVeiculos.join("\n"));
});

// Atualizar veículo
app.put("/veiculo", (req, res) => {
  const identificador = req.body.identificador;
  const cor = req.body.cor;
  const preco = req.body.preco;

  if (!identificador) {
    res.status(400).send(`Favor, preencha o campo corretamente.`);
  }

  const veiculoID = veiculos.findIndex(
    (veiculo) => veiculo.id === identificador
  );

  if (veiculoID === -1) {
    res.status(400).json(`Veiculo não localizado.`);
  } else {
    veiculos[veiculoID].cor = cor;
    veiculos[veiculoID].preco = preco;
    res.status(200).json(`Veiculo atualizado com sucesso.`);
  }
});

// Deletar Veiculo
app.delete("/veiculo", (req, res) => {
  const id = req.body.id;

  const idVeiculo = veiculos.findIndex((veiculo) => veiculo.id === id);

  if (idVeiculo === -1) {
    return res.status(400).send("Veiculo não existe");
  } else {
    veiculos.splice(idVeiculo, 1);

    console.log(veiculos);

    res.status(200).json("Veiculo removido com sucesso");
  }
});

// Cadastrar usuário
app.post("/usuario", async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).send("Todos os campos são obrigatórios.");
  }

  try {
    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const novoUsuario = {
      id: uuidv4(),
      nome: nome,
      email: email,
      senha: senhaCriptografada,
    };

    usuarios.push(novoUsuario);
    res.status(200).json("Usuário criado com sucesso");
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: "Erro ao criar usuário" });
  }
});

// Realizar login com conta do usuário
app.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  if ((!email, !senha)) {
    return res.status(400).json({ mensagem: "Email e senha são obrigatórios" });
  }

  const usuario = usuarios.find((user) => user.email === email);

  if (!usuario) {
    return res.status(400).json({ message: "Usuário não localizado" });
  }

  const senhaValida = await bcrypt.compare(senha, usuario.senha);

  if (!senhaValida) {
    return res.status(401).json({ mensagem: "Senha incorreta" });
  }

  res.status(200).json({ mensagem: "Login realizado com sucesso" });
});

app.listen(port, () => console.log(`Servidor iniciado na porta ${port}`));
