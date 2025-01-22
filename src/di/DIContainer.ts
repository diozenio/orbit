import GithubGraphQLAPI from "@/graphql/github";
import GithubService from "@/services/GithubService";
import { GITHUB_CONFIG } from "@/config";

const GithubServiceInstance = new GithubService(
  new GithubGraphQLAPI({
    token: GITHUB_CONFIG.token,
    username: GITHUB_CONFIG.username,
  })
);

export const services = {
  GithubService: GithubServiceInstance,
} as const;
