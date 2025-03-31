import GithubService from "@/services/GithubService";
import LinearService from "@/services/LinearService";

import { githubGateway } from "./github";
import { linearGateway } from "./linear";
import { expensesGateway } from "./expenses";
import ExpensesService from "@/services/ExpensesService";

const GithubServiceInstance = new GithubService(githubGateway);
const LinearServiceInstance = new LinearService(linearGateway);
const ExpensesServiceInstace = new ExpensesService(expensesGateway);

export const services = {
  GithubService: GithubServiceInstance,
  LinearService: LinearServiceInstance,
  ExpensesService: ExpensesServiceInstace,
} as const;
