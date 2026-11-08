import Link from "next/link";

export default function Inicio() {
  return (
    <section>
      <h1>Controle Acadêmico</h1>
      <p>
        Sistema para consultar e cadastrar alunos e matrículas, além de consultar o catálogo de disciplinas do curso.
      </p>
      <ul className="atalhos">
        <li>
          <Link href="/alunos" className="atalho alunos">
            Alunos
          </Link>
        </li>
        <li>
          <Link href="/disciplinas" className="atalho disciplinas">
            Disciplinas
          </Link>
        </li>
        <li>
          <Link href="/matriculas" className="atalho matriculas">
            Matrículas
          </Link>
        </li>
      </ul>
    </section>
  );
}
