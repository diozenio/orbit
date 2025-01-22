import Model from "@/models/Model";
import DTO from "@/types/http/DTO";

interface GithubContributionsDTO extends DTO {
  totalCommitContributions: number;
  restrictedContributionsCount: number;
  from: string;
  to: string;
}

export default class GithubContributions extends Model {
  constructor(
    private readonly totalCommits: number,
    private readonly fromDate: Date,
    private readonly toDate: Date
  ) {
    super();
  }

  static override fromJSON(json: GithubContributionsDTO): GithubContributions {
    return new GithubContributions(
      json.totalCommitContributions + json.restrictedContributionsCount,
      new Date(json.from),
      new Date(json.to)
    );
  }

  override toJSON(): GithubContributionsDTO {
    return {
      totalCommitContributions: this.totalCommits,
      restrictedContributionsCount: 0,
      from: this.fromDate.toISOString(),
      to: this.toDate.toISOString(),
    };
  }

  getTotalCommits(): number {
    return this.totalCommits;
  }

  getFromDate(): Date {
    return this.fromDate;
  }

  getToDate(): Date {
    return this.toDate;
  }
}
