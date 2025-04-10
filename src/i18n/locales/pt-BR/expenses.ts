import { LocaleSchema } from "../schema";

export const expenses: LocaleSchema["expenses"] = {
  title: "Despesas",
  cards: {
    total: "Total de Gastos",
    totalDescription: "Total de gastos para o mês",
    remaining: "Saldo Restante",
    remainingDescription: "Saldo restante para o mês",
    limit: "Limite de Gastos",
    limitDescription: "Limite de gastos para o mês",
  },
  charts: {
    weekly: {
      title: "Gastos e Poupanças Diárias",
      description: "Monitoramento da última semana",
      limit: "Limite diário",
      spentValue: "Valor gasto",
      savedValue: "Valor poupado",
    },
    monthly: {
      title: "Valor Mensal Total",
      description: "Seu Resumo de Gastos",
      spent: "Gastos",
      consumed: "Você consumiu {value} de um limite de {limit}",
      represents: "Isso representa {percentage} do seu limite",
    },
  },
  transactions: {
    title: "Últimas Transações",
    emptyState: {
      title: "Nenhuma transação encontrada",
      description:
        "Adicione uma transação para começar a controlar seus gastos",
    },
  },
};
