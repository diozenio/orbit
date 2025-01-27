import GithubAPI from "@/api/github";
import GithubService from "@/services/GithubService";
import LinearService from "@/services/LinearService";
import LinearAPI from "@/api/linear";

const GithubServiceInstance = new GithubService(new GithubAPI());

const LinearServiceInstance = new LinearService(new LinearAPI());

export const services = {
  GithubService: GithubServiceInstance,
  LinearService: LinearServiceInstance,
} as const;
