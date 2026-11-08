import { disciplinas } from "@/data/disciplinas";

export default function Disciplinas() {
  return (
    <section className="area-disciplinas">
      <h1>Disciplinas</h1>
      <p>Total de disciplinas: {disciplinas.length}</p>
      <ul className="cartoes">
        {disciplinas.map((d) => (
          <li key={d.id} className="cartao">
            <span className="cartao-id">ID {d.id}</span>
            <strong>{d.name}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}
