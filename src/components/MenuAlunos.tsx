"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuAlunos() {
  const caminho = usePathname();
  const cadastro = caminho === "/alunos/novo";

  return (
    <aside className="menu-lateral" aria-label="Menu de alunos">
      <Link href="/alunos" className={!cadastro ? "ativo" : undefined}>
        Consultar alunos
      </Link>
      <Link href="/alunos/novo" className={cadastro ? "ativo" : undefined}>
        Cadastrar aluno
      </Link>
    </aside>
  );
}
