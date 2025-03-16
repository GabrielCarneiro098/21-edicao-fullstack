import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

// prismaClient.aluno
// prismaClient.turma
// prismaClient.matricula

async function selectAll() {
  await prismaClient.aluno.findMany();
}
