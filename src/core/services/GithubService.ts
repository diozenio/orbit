import GithubUseCase from "@/useCases/GithubUseCase";
import GithubContributions from "@/models/github/GithubContributions";

export default class GithubService extends GithubUseCase {
  async getYearlyContributions(): Promise<GithubContributions> {
    const currentYear = new Date().getFullYear();
    const startOfYear = new Date(currentYear, 0, 1); // January 1st of current year

    return this.adapter.getContributionsSince(startOfYear);
  }
}
