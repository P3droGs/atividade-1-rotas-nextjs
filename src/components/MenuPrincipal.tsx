"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", rotulo: "Início", area: "inicio" },
  { href: "/alunos", rotulo: "Alunos", area: "alunos" },
  { href: "/disciplinas", rotulo: "Disciplinas", area: "disciplinas" },
  { href: "/matriculas", rotulo: "Matrículas", area: "matriculas" },
];

export default function MenuPrincipal() {
  const caminho = usePathname();

  return (
    <nav className="menu-principal" aria-label="Menu principal">
      {links.map(({ href, rotulo, area }) => {
        // Ativo também nas subrotas (cadastro e detalhes)
        const ativo = href === "/" ? caminho === "/" : caminho === href || caminho.startsWith(href + "/");
        return (
          <Link
            key={href}
            href={href}
            className={`link-${area}${ativo ? " ativo" : ""}`}
            aria-current={ativo ? "page" : undefined}
          >
            {rotulo}
          </Link>
        );
      })}
    </nav>
  );
}
