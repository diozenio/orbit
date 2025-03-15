export const schema = {
  app: {
    title: "",
    description: "",
  },
  stats: {
    noTitle: "",
    noDescription: "",
    dashboard: {
      title: "",
      cards: {
        commits: {
          title: "",
          description: "",
        },
        tasks: {
          title: "",
          description: "",
        },
        points: {
          title: "",
          description: "",
        },
      },
    },
    crypto: {
      title: "",
      subtitle: "",
      portfolioTotal: "",
      table: {
        headers: {
          asset: "",
          price: "",
          change: "",
          amount: "",
          total: "",
        },
      },
    },
  },
  common: {
    loading: "",
    error: "",
    success: "",
  },
  sidebar: {
    home: "",
    finances: {
      label: "",
      crypto: "",
      expenses: "",
    },
  },
} as const;

type DeepStringify<T> = {
  [K in keyof T]: T[K] extends object ? DeepStringify<T[K]> : string;
};

export type LocaleSchema = DeepStringify<typeof schema>;
