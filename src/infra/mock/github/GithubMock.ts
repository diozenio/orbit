import GithubAdapter from "@/core/interfaces/adapters/GithubAdapter";
import GithubContributions from "@/core/domain/models/github/GithubContributions";

export default class GithubMock extends GithubAdapter {
  async getContributionsSince(date: Date): Promise<GithubContributions> {
    return new GithubContributions(1234, date, new Date());
  }
}
