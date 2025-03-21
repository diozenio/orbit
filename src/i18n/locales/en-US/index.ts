import type { LocaleSchema } from "../schema";
import { app } from "./app";
import { stats } from "./stats";
import { common } from "./common";
import { sidebar } from "./sidebar";
import { crypto } from "./crypto";
import { expenses } from "./expenses";

export const enUS: LocaleSchema = {
  app,
  stats,
  common,
  sidebar,
  crypto,
  expenses,
};
