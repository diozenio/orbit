import GithubService from "@/core/services/GithubService";
import LinearService from "@/core/services/LinearService";

import { githubGateway } from "./github";
import { linearGateway } from "./linear";

const GithubServiceInstance = new GithubService(githubGateway);
const LinearServiceInstance = new LinearService(linearGateway);

export const services = {
  GithubService: GithubServiceInstance,
  LinearService: LinearServiceInstance,
} as const;
