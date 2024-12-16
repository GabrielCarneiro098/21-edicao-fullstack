import { Aluno } from "./Aluno";

export class Turma {
  private _id: string;
  private _edicao: number;
  private _programa: string;
  private _alunos: Aluno[] = [];

  constructor(id: string, edicao: number, programa: string) {
    this._id = id;
    this._edicao = edicao;
    this._programa = programa;
  }

  listarAlunos(): void {
    console.log(this._alunos);
  }

  adicionarAluno(aluno: Aluno): void {
    this._alunos.push(aluno);
  }
}
