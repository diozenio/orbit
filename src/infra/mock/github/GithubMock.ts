import GithubAdapter from "@/core/interfaces/adapters/GithubAdapter";
import GithubContributions from "@/core/domain/models/github/GithubContributions";

export class GithubMock implements GithubAdapter {
  async getContributionsSince(date: Date): Promise<GithubContributions> {
    return new GithubContributions(1234, date, new Date());
  }

  async getYearlyCommits(): Promise<number> {
    return 847;
  }
}
