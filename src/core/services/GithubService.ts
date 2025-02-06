import GithubUseCase from "@/useCases/GithubUseCase";
import GithubContributions from "@/models/github/GithubContributions";

export default class GithubService extends GithubUseCase {
  async getContributionsSince(date: Date): Promise<GithubContributions> {
    return this.adapter.getContributionsSince(date);
  }
}
