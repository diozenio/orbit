import { LocaleSchema } from "../schema";

export const crypto: LocaleSchema["crypto"] = {
  title: "Portfólio de Criptomoedas",
  subtitle: "Acompanhe o desempenho dos seus ativos",
  portfolioTotal: "Total do Portfólio",
  table: {
    headers: {
      asset: "Ativo",
      price: "Preço",
      change: "Variação",
      amount: "Quantidade",
      total: "Valor Total",
    },
  },
};
