import GithubAdapter from "@/adapters/GithubAdapter";
import GithubContributions from "@/models/github/GithubContributions";
import GraphQLClient from "@/graphql/client";
import { GITHUB_CONFIG } from "@/config";

interface GithubAPIConfig {
  token: string;
  username: string;
}

interface GithubContributionsResponse {
  user: {
    contributionsCollection: {
      totalCommitContributions: number;
      restrictedContributionsCount: number;
    };
  };
}

export default class GithubGraphQLAPI extends GithubAdapter {
  private client: GraphQLClient;
  private username: string;

  constructor(config: GithubAPIConfig) {
    super();
    this.username = config.username;
    this.client = new GraphQLClient({
      url: GITHUB_CONFIG.apiUrl,
      headers: {
        Authorization: `Bearer ${config.token}`,
      },
    });
  }

  async getContributionsSince(date: Date): Promise<GithubContributions> {
    const query = `
      query GetContributions($username: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $username) {
          contributionsCollection(from: $from, to: $to) {
            totalCommitContributions
            restrictedContributionsCount
          }
        }
      }
    `;

    const now = new Date();
    const variables = {
      username: this.username,
      from: date.toISOString(),
      to: now.toISOString(),
    };

    const data = await this.client.query<GithubContributionsResponse>(
      query,
      variables
    );

    return GithubContributions.fromJSON({
      ...data.user.contributionsCollection,
      from: variables.from,
      to: variables.to,
    });
  }
}
