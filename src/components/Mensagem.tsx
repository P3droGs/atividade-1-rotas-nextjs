export default function Mensagem({ erro }: { erro: string | null }) {
  if (!erro) return null;
  return (
    <p className="erro" role="alert">
      {erro}
    </p>
  );
}
