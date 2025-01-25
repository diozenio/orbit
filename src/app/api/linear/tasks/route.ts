import { NextResponse } from "next/server";
import { LinearClient } from "@linear/sdk";
import { LINEAR_CONFIG } from "@/config";

const linearClient = new LinearClient({
  apiKey: LINEAR_CONFIG.apiKey,
});

export async function GET() {
  try {
    const startOfWeek = new Date();
    startOfWeek.setDate(startOfWeek.getDate() - 7);

    const { nodes: issues } = await linearClient.issues({
      filter: {
        completedAt: { gte: startOfWeek.toISOString() },
      },
    });

    return NextResponse.json({
      weeklyTasks: issues.length,
    });
  } catch (error) {
    console.error("Error fetching Linear tasks:", error);
    return NextResponse.json(
      { error: "Error fetching Linear tasks" },
      { status: 500 }
    );
  }
}
