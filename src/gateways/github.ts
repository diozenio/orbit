import { isDevelopment } from "@/constants/environment";
import GithubAPI from "@/api/github";
import { GithubMock } from "@/mocks/github/GithubMock";

export const githubGateway = isDevelopment ? new GithubMock() : new GithubAPI();
