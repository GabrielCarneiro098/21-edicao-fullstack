-- AlterTable
ALTER TABLE "produtos" ADD COLUMN     "disponivel" BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE "lojas" (
    "cnpj" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "segmento" VARCHAR(100) NOT NULL DEFAULT 'alimentação',
    "endereco" VARCHAR(200) NOT NULL,
    "telefone" VARCHAR(12) NOT NULL,
    "quantidadeFilias" INTEGER NOT NULL,
    "inaugurado_em" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lojas_pkey" PRIMARY KEY ("cnpj")
);

-- CreateTable
CREATE TABLE "fornecedores" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "email" VARCHAR(200) NOT NULL,
    "avaliacao" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "criado_em" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "fornecedores_pkey" PRIMARY KEY ("id")
);
