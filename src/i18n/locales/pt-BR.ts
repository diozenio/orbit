import type { LocaleSchema } from "./schema";

export const ptBR: LocaleSchema = {
  app: {
    title: "Orbit",
    description: "Everything that orbits around you, centralized.",
  },
  stats: {
    noTitle: "Sem título",
    noDescription: "Sem descrição",
    dashboard: {
      title: "Dashboard",
      cards: {
        commits: {
          title: "Commits este ano",
          description: `Desde Janeiro de ${new Date().getFullYear()}`,
        },
        tasks: {
          title: "Tarefas esta semana",
          description: "Completadas nos últimos 7 dias",
        },
        points: {
          title: "Total de Pontos",
          description: "De todas as tarefas completadas",
        },
      },
    },
  },
  common: {
    loading: "Carregando...",
    error: "Erro",
    success: "Sucesso",
  },
};
