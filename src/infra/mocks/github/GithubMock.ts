import GithubAdapter from "@/adapters/GithubAdapter";
import GithubContributions from "@/models/github/GithubContributions";
import { delay } from "@/utils/delay";

export class GithubMock implements GithubAdapter {
  async getContributionsSince(date: Date): Promise<GithubContributions> {
    await delay(1000);
    return new GithubContributions(1234, date, new Date());
  }

  async getYearlyCommits(): Promise<number> {
    await delay(1000);
    return 847;
  }
}
