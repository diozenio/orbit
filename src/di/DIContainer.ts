import GithubGraphQLAPI from "@/graphql/github";
import GithubService from "@/services/GithubService";
import LinearService from "@/services/LinearService";
import LinearAPI from "@/api/linear";
import { GITHUB_CONFIG } from "@/config";

const GithubServiceInstance = new GithubService(
  new GithubGraphQLAPI({
    token: GITHUB_CONFIG.token,
    username: GITHUB_CONFIG.username,
  })
);

const LinearServiceInstance = new LinearService(new LinearAPI());

export const services = {
  GithubService: GithubServiceInstance,
  LinearService: LinearServiceInstance,
} as const;
