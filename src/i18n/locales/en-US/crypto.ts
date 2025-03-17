import { LocaleSchema } from "../schema";

export const crypto: LocaleSchema["crypto"] = {
  title: "Crypto Portfolio",
  subtitle: "Track your assets performance",
  portfolioTotal: "Portfolio Total",
  table: {
    headers: {
      asset: "Asset",
      price: "Price",
      change: "Change",
      amount: "Amount",
      total: "Total Value",
    },
  },
};
