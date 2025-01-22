import GithubContributions from "@/models/github/GithubContributions";

export default abstract class GithubAdapter {
  abstract getContributionsSince(date: Date): Promise<GithubContributions>;
}
