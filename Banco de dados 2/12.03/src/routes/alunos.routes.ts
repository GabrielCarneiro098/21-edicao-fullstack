import { Router } from "express";
import { AlunosController } from "./alunos.controller";

export class AlunosRoutes {
  public static bind() {
    const router = Router();

    const controller = new AlunosController();

    router.get("/alunos", controller.listar); //listando alunos
    router.get("/alunos/:id", controller.buscarPorID); //listando alunos
    router.post("/alunos", controller.cadastrar); //cadastrando um aluno
    router.put("/alunos/:id", controller.atualizar); //atualizar aluno
    router.delete("/alunos/:id", controller.deletar); //deletar aluno
  }
}
