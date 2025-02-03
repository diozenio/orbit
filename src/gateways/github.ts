import { isDevelopment } from "@/constants/environment";
import GithubAPI from "@/infra/api/rest/github";
import { GithubMock } from "@/infra/mock/github/GithubMock";

export const githubGateway = isDevelopment ? new GithubMock() : new GithubAPI();
