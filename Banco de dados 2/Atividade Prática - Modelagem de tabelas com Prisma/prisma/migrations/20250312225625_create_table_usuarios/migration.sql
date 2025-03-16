-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "idade" INTEGER NOT NULL,
    "email" VARCHAR(200) NOT NULL,
    "password" TEXT NOT NULL,
    "github" TEXT NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produtos" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR(500) NOT NULL,
    "valor" DECIMAL(10,2) NOT NULL,
    "quantidadeEstoque" INTEGER NOT NULL,
    "tipoProduto" VARCHAR(100) NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);
