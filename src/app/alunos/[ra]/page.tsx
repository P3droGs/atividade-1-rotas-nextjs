"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useDados } from "@/context/DadosContext";

export default function DetalhesAluno() {
  const { ra } = useParams<{ ra: string }>();
  const { alunos, carregado } = useDados();

  if (!carregado) return <p>Carregando...</p>;

  const aluno = alunos.find((a) => String(a.ra) === ra);

  if (!aluno) {
    return (
      <section>
        <h1>Aluno não encontrado</h1>
        <p>Não existe aluno com o RA {ra}.</p>
        <Link href="/alunos">Voltar para a listagem</Link>
      </section>
    );
  }

  return (
    <section>
      <h1>{aluno.name}</h1>
      <dl className="detalhes">
        <dt>RA</dt>
        <dd>{aluno.ra}</dd>
        <dt>Nome completo</dt>
        <dd>{aluno.name}</dd>
      </dl>
      <Link href="/alunos">Voltar para a listagem</Link>
    </section>
  );
}
