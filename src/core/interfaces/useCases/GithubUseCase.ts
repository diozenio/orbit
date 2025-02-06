import GithubAdapter from "@/adapters/GithubAdapter";
import GithubContributions from "@/models/github/GithubContributions";

export default abstract class GithubUseCase {
  constructor(protected readonly adapter: GithubAdapter) {}

  abstract getContributionsSince(date: Date): Promise<GithubContributions>;
}
