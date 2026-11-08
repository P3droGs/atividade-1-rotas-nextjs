"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Mensagem from "@/components/Mensagem";
import { useDados } from "@/context/DadosContext";

export default function NovoAluno() {
  const { cadastrarAluno } = useDados();
  const router = useRouter();
  const [ra, setRa] = useState("");
  const [nome, setNome] = useState("");
  const [erro, setErro] = useState<string | null>(null);

  function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const resultado = cadastrarAluno({ ra: Number(ra), name: nome });
    if (resultado) return setErro(resultado);
    router.push("/alunos");
  }

  return (
    <section>
      <h1>Cadastrar aluno</h1>
      <form className="formulario" onSubmit={enviar}>
        <label>
          RA
          <input type="number" min={1} required value={ra} onChange={(e) => setRa(e.target.value)} />
        </label>
        <label>
          Nome completo
          <input type="text" required value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <Mensagem erro={erro} />
        <div className="acoes">
          <button type="submit">Cadastrar</button>
          <Link href="/alunos">Voltar</Link>
        </div>
      </form>
    </section>
  );
}
