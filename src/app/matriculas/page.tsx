"use client";

import Link from "next/link";
import { useDados } from "@/context/DadosContext";
import { disciplinas } from "@/data/disciplinas";

export default function ListaMatriculas() {
  const { alunos, matriculas, carregado } = useDados();

  if (!carregado) return <p>Carregando...</p>;

  return (
    <section className="area-matriculas">
      <h1>Matrículas</h1>
      <div className="barra">
        <p>Total de matrículas: {matriculas.length}</p>
        <Link href="/matriculas/nova" className="botao">
          Nova matrícula
        </Link>
      </div>

      {matriculas.length === 0 ? (
        <p>Nenhuma matrícula cadastrada.</p>
      ) : (
        <table className="tabela">
          <thead>
            <tr>
              <th>RA</th>
              <th>Aluno</th>
              <th>Disciplina</th>
            </tr>
          </thead>
          <tbody>
            {matriculas.map((m) => (
              <tr key={`${m.student_ra}-${m.course_id}`}>
                <td>{m.student_ra}</td>
                <td>{alunos.find((a) => a.ra === m.student_ra)?.name ?? "—"}</td>
                <td>{disciplinas.find((d) => d.id === m.course_id)?.name ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
