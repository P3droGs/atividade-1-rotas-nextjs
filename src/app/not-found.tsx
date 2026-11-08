import Link from "next/link";

export default function NaoEncontrado() {
  return (
    <section>
      <h1>Página não encontrada</h1>
      <p>O endereço acessado não existe.</p>
      <Link href="/">Voltar ao início</Link>
    </section>
  );
}
