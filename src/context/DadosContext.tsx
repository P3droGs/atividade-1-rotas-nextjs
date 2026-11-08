"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { alunos as alunosIniciais, type Aluno } from "@/data/alunos";
import { matriculas as matriculasIniciais, type Matricula } from "@/data/matriculas";
import { disciplinas } from "@/data/disciplinas";

const CHAVE_ALUNOS = "alunos";
const CHAVE_MATRICULAS = "matriculas";

type DadosContexto = {
  alunos: Aluno[];
  matriculas: Matricula[];
  carregado: boolean;
  cadastrarAluno: (aluno: Aluno) => string | null;
  cadastrarMatricula: (matricula: Matricula) => string | null;
};

const Contexto = createContext<DadosContexto | null>(null);

function ler<T>(chave: string, padrao: T[]): T[] {
  try {
    const salvo = localStorage.getItem(chave);
    const lido: unknown = salvo ? JSON.parse(salvo) : null;
    return Array.isArray(lido) ? (lido as T[]) : padrao;
  } catch {
    return padrao;
  }
}

function salvar(chave: string, valor: unknown): boolean {
  try {
    localStorage.setItem(chave, JSON.stringify(valor));
    return true;
  } catch {
    return false;
  }
}

const ERRO_SALVAR = "Não foi possível salvar no navegador. O cadastro não foi concluído.";
const ERRO_CARREGANDO = "Aguarde o carregamento dos dados e tente novamente.";

export function DadosProvider({ children }: { children: React.ReactNode }) {
  // No primeiro acesso usa os arquivos de src/data; depois, o que estiver salvo no navegador.
  const [alunos, setAlunos] = useState<Aluno[]>(alunosIniciais);
  const [matriculas, setMatriculas] = useState<Matricula[]>(matriculasIniciais);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage só existe no navegador
    setAlunos(ler(CHAVE_ALUNOS, alunosIniciais));
    setMatriculas(ler(CHAVE_MATRICULAS, matriculasIniciais));
    setCarregado(true);
  }, []);

  function cadastrarAluno(aluno: Aluno): string | null {
    if (!carregado) return ERRO_CARREGANDO;
    if (!Number.isInteger(aluno.ra) || aluno.ra <= 0) return "Informe um RA numérico válido.";
    if (aluno.name.trim().split(/\s+/).length < 2) return "Informe o nome completo (nome e sobrenome).";
    if (alunos.some((a) => a.ra === aluno.ra)) return `Já existe um aluno com o RA ${aluno.ra}.`;

    const novos = [...alunos, { ra: aluno.ra, name: aluno.name.trim() }];
    if (!salvar(CHAVE_ALUNOS, novos)) return ERRO_SALVAR;
    setAlunos(novos);
    return null;
  }

  function cadastrarMatricula(m: Matricula): string | null {
    if (!carregado) return ERRO_CARREGANDO;
    if (!alunos.some((a) => a.ra === m.student_ra)) return "Selecione um aluno.";
    if (!disciplinas.some((d) => d.id === m.course_id)) return "Selecione uma disciplina.";
    if (matriculas.some((x) => x.student_ra === m.student_ra && x.course_id === m.course_id)) {
      return "Este aluno já está matriculado nesta disciplina.";
    }

    const novas = [...matriculas, m];
    if (!salvar(CHAVE_MATRICULAS, novas)) return ERRO_SALVAR;
    setMatriculas(novas);
    return null;
  }

  return (
    <Contexto.Provider value={{ alunos, matriculas, carregado, cadastrarAluno, cadastrarMatricula }}>
      {children}
    </Contexto.Provider>
  );
}

export function useDados() {
  const ctx = useContext(Contexto);
  if (!ctx) throw new Error("useDados precisa estar dentro de DadosProvider");
  return ctx;
}
