import { app, stats, crypto, common, sidebar, expenses } from "./resources";

export const schema = {
  app,
  stats,
  crypto,
  expenses,
  common,
  sidebar,
} as const;

type DeepStringify<T> = {
  [K in keyof T]: T[K] extends object ? DeepStringify<T[K]> : string;
};

export type LocaleSchema = DeepStringify<typeof schema>;
