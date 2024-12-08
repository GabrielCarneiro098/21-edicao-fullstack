import express from "express";
import { v4 as uuidv4 } from "uuid";

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

const veiculos = [];

app.get("/", (req, res) => {
  res.status(200).send("ola");
});

app.post("/veiculo", (req, res) => {
  const { modelo, marca, ano, cor, preco } = req.body.marca;

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

    res.status(200).json("teste");
  }
});

app.listen(port, () => console.log(`Servidor iniciado na porta ${port}`));
