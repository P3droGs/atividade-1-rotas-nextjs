import MenuAlunos from "@/components/MenuAlunos";

export default function AlunosLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="area-alunos">
      <MenuAlunos />
      <div className="area-alunos-conteudo">{children}</div>
    </div>
  );
}
