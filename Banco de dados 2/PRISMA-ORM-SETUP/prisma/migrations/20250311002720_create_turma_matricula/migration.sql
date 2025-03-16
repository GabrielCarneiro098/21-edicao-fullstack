-- CreateEnum
CREATE TYPE "SituacaoAluno" AS ENUM ('pendente', 'regular', 'bloqueado');

-- CreateTable
CREATE TABLE "turmas" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(200) NOT NULL,
    "data_inicio" DATE NOT NULL,
    "data_termino" DATE NOT NULL,

    CONSTRAINT "turmas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "matricula" (
    "id" SERIAL NOT NULL,
    "id_turma" INTEGER NOT NULL,
    "id_aluno" INTEGER NOT NULL,
    "data_matricula" DATE NOT NULL,
    "situacao" "SituacaoAluno" NOT NULL DEFAULT 'pendente',

    CONSTRAINT "matricula_pkey" PRIMARY KEY ("id")
);
