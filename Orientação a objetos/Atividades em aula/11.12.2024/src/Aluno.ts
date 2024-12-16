import { Turma } from "./Turma";
import { Skill } from "./Skill";

export class Aluno {
  private _id: string;
  private _nome: string;
  private _idade: number;
  private _skills: Skill[] = [];
  private _turma: Turma;

  constructor(id: string, nome: string, idade: number, turma: Turma) {
    this._id = id;
    this._nome = nome;
    this._idade = idade;
    this._turma = turma;
  }

  listarSkills(): void {
    console.log("Aqui", this._skills);
  }

  adicionarSkill(skill: Skill): void {
    this._skills.push(skill);
  }
}
