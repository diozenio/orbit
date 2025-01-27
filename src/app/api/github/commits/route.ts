import { NextResponse } from "next/server";
import GraphQLClient from "@/graphql/client";
import { GITHUB_CONFIG } from "@/config";

export async function GET() {
  try {
    const client = new GraphQLClient({
      url: GITHUB_CONFIG.apiUrl,
      headers: {
        Authorization: `Bearer ${GITHUB_CONFIG.token}`,
      },
    });

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

    const date = new Date();
    date.setDate(date.getDate() - 30); // last 30 days

    const variables = {
      username: GITHUB_CONFIG.username,
      from: date.toISOString(),
      to: new Date().toISOString(),
    };

    const data = await client.query(query, variables);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching Github commits:", error);
    return NextResponse.json(
      { error: "Error fetching Github commits" },
      { status: 500 }
    );
  }
}
