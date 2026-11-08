# Atividade 1 – Rotas e navegação no Next.js

Consulta e cadastro de alunos e matrículas, e consulta do catálogo de disciplinas.
Next.js (App Router) + TypeScript, organizado em `src/`.

Autor: [P3droGs](https://github.com/P3droGs) · Laboratório de Desenvolvimento Web, Fatec (Prof. Arley)

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Rotas

| Rota | Tela |
| --- | --- |
| `/` | Início com links para as áreas |
| `/alunos` | Lista de alunos (nome, RA e total) |
| `/alunos/[ra]` | Detalhes do aluno pelo RA |
| `/alunos/novo` | Cadastro de aluno |
| `/disciplinas` | Catálogo de disciplinas em cartões |
| `/matriculas` | Tabela de matrículas |
| `/matriculas/nova` | Cadastro de matrícula |

## Estrutura

- `src/data/`: dados fornecidos (alunos, disciplinas, matrículas).
- `src/context/DadosContext.tsx`: contexto React com alunos e matrículas. No primeiro acesso usa `src/data/`; os cadastros ficam no `localStorage`. Se não for possível salvar, o cadastro não é concluído e uma mensagem é exibida.
- `src/components/`: menu principal, menu lateral de alunos e mensagem de erro.
- `src/app/`: páginas, layout raiz (cabeçalho, menu e rodapé), layout da área de alunos e página 404.

Cores: azul para alunos, verde para disciplinas e laranja para matrículas.
