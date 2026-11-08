"use client";

import Link from "next/link";
import { useDados } from "@/context/DadosContext";

export default function ListaAlunos() {
  const { alunos, carregado } = useDados();

  if (!carregado) return <p>Carregando...</p>;

  return (
    <section>
      <h1>Alunos</h1>
      <p>Total de alunos: {alunos.length}</p>
      <ul className="lista-alunos">
        {alunos.map((aluno) => (
          <li key={aluno.ra}>
            <Link href={`/alunos/${aluno.ra}`}>
              <strong>{aluno.name}</strong> <span>RA {aluno.ra}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
