"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Mensagem from "@/components/Mensagem";
import { useDados } from "@/context/DadosContext";
import { disciplinas } from "@/data/disciplinas";

export default function NovaMatricula() {
  const { alunos, cadastrarMatricula } = useDados();
  const router = useRouter();
  const [ra, setRa] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [erro, setErro] = useState<string | null>(null);

  function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const resultado = cadastrarMatricula({ student_ra: Number(ra), course_id: Number(disciplina) });
    if (resultado) return setErro(resultado);
    router.push("/matriculas");
  }

  return (
    <section className="area-matriculas">
      <h1>Cadastrar matrícula</h1>
      <form className="formulario" onSubmit={enviar}>
        <label>
          Aluno
          <select required value={ra} onChange={(e) => setRa(e.target.value)}>
            <option value="">Selecione um aluno</option>
            {alunos.map((a) => (
              <option key={a.ra} value={a.ra}>
                {a.ra} - {a.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Disciplina
          <select required value={disciplina} onChange={(e) => setDisciplina(e.target.value)}>
            <option value="">Selecione uma disciplina</option>
            {disciplinas.map((d) => (
              <option key={d.id} value={d.id}>
                {d.id} - {d.name}
              </option>
            ))}
          </select>
        </label>
        <Mensagem erro={erro} />
        <div className="acoes">
          <button type="submit">Cadastrar</button>
          <Link href="/matriculas">Voltar</Link>
        </div>
      </form>
    </section>
  );
}
