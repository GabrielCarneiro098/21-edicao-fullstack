import express from "express";
import { envs } from "./envs";

const app = express();

app.use(express.json());

console.log(envs.PORT, envs.DATABASE_URL);

app.listen(envs.PORT, () => console.log("Servidor on!"));
