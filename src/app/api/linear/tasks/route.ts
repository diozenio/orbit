import { NextResponse } from "next/server";
import { LinearClient } from "@linear/sdk";
import { LINEAR_CONFIG } from "@/config";

const linearClient = new LinearClient({
  apiKey: LINEAR_CONFIG.apiKey,
});

export async function GET() {
  try {
    const today = new Date();

    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    const { nodes: issues } = await linearClient.issues({
      filter: {
        completedAt: {
          gte: startOfWeek.toISOString(),
          lte: endOfWeek.toISOString(),
        },
      },
    });

    return NextResponse.json({
      weeklyTasks: issues.length,
      period: {
        start: startOfWeek.toISOString(),
        end: endOfWeek.toISOString(),
      },
    });
  } catch (error) {
    console.error("Error fetching Linear tasks:", error);
    return NextResponse.json(
      { error: "Error fetching Linear tasks" },
      { status: 500 }
    );
  }
}
