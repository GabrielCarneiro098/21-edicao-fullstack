-- CreateTable
CREATE TABLE "alunos" (
    "id" UUID NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "idade" SMALLINT,
    "senha" TEXT NOT NULL,
    "auth_token" UUID,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "alunos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "alunos_email_key" ON "alunos"("email");
