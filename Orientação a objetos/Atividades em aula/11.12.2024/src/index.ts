import { Turma } from "./Turma";
import { Aluno } from "./Aluno";
import { Skill } from "./Skill";

const turma21 = new Turma("021", 21, "PS Web Full-Stack");
const aluno1 = new Aluno("01", "Gabriel Carneiro", 23, turma21);
const aluno2 = new Aluno("02", "Eduardo Barbosa", 24, turma21);
const skillComunicacao = new Skill(
  "00",
  "Habilidade de boa comunicação com equipe",
  true
);

aluno1.adicionarSkill(skillComunicacao);
turma21.adicionarAluno(aluno1);
turma21.adicionarAluno(aluno2);
turma21.listarAlunos();
