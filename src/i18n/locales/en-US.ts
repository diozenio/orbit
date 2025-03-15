import type { LocaleSchema } from "./schema";

export const enUS: LocaleSchema = {
  app: {
    title: "Orbit",
    description: "Everything that orbits around you, centralized.",
  },
  stats: {
    noTitle: "No title",
    noDescription: "No description",
    dashboard: {
      title: "Dashboard",
      cards: {
        commits: {
          title: "Commits this year",
          description: `Since January ${new Date().getFullYear()}`,
        },
        tasks: {
          title: "Tasks this week",
          description: "Completed in the last 7 days",
        },
        points: {
          title: "Total Points",
          description: "From all completed tasks",
        },
      },
    },
    crypto: {
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
    },
  },
  common: {
    loading: "Loading...",
    error: "Error",
    success: "Success",
  },
  sidebar: {
    home: "Home",
    finances: {
      label: "Finances",
      crypto: "Crypto",
      expenses: "Expenses",
    },
  },
};
