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
  },
  common: {
    loading: "",
    error: "",
    success: "",
  },
} as const;

type DeepStringify<T> = {
  [K in keyof T]: T[K] extends object ? DeepStringify<T[K]> : string;
};

export type LocaleSchema = DeepStringify<typeof schema>;
