-- AddForeignKey
ALTER TABLE "matricula" ADD CONSTRAINT "matricula_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "alunos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matricula" ADD CONSTRAINT "matricula_id_turma_fkey" FOREIGN KEY ("id_turma") REFERENCES "turmas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
