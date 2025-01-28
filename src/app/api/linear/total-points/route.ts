import { NextResponse } from "next/server";
import { LinearClient } from "@linear/sdk";
import { LINEAR_CONFIG } from "@/config";
import { calculateTaskPoints } from "@/core/utils/points";

const linearClient = new LinearClient({
  apiKey: LINEAR_CONFIG.apiKey,
});

export async function GET() {
  try {
    const { nodes: completedIssues } = await linearClient.issues({
      filter: {
        completedAt: {
          null: false,
        },
      },
    });

    const totalPoints = completedIssues.reduce(
      (acc, issue) => acc + calculateTaskPoints(issue.priority),
      0
    );

    return NextResponse.json({ totalPoints });
  } catch (error) {
    console.error("Error fetching Linear total points:", error);
    return NextResponse.json(
      { error: "Error fetching Linear total points" },
      { status: 500 }
    );
  }
}
