import type { Metadata } from "next";
import Link from "next/link";
import MenuPrincipal from "@/components/MenuPrincipal";
import { DadosProvider } from "@/context/DadosContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Controle Acadêmico",
  description: "Consulta e cadastro de alunos, disciplinas e matrículas",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="cabecalho">
          <Link href="/" className="marca">
            Controle Acadêmico
          </Link>
          <MenuPrincipal />
        </header>
        <DadosProvider>
          <main className="conteudo">{children}</main>
        </DadosProvider>
        <footer className="rodape">Laboratório de Desenvolvimento Web · Fatec</footer>
      </body>
    </html>
  );
}
