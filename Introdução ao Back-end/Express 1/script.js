import express from "express";
import { v4 as uuidv4 } from "uuid";

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

const veiculos = [];

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

app.listen(port, () => console.log(`Servidor iniciado na porta ${port}`));
