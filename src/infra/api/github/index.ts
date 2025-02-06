import GithubAdapter from "@/adapters/GithubAdapter";
import GithubContributions from "@/models/github/GithubContributions";

export default class GithubAPI extends GithubAdapter {
  constructor() {
    super();
  }

  async getContributionsSince(date: Date): Promise<GithubContributions> {
    const response = await fetch("/api/github/commits");
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error);
    }

    return GithubContributions.fromJSON({
      ...data.user.contributionsCollection,
      from: date.toISOString(),
      to: new Date().toISOString(),
    });
  }
}
