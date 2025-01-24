import { LinearClient } from "@linear/sdk";
import LinearAdapter from "@/adapters/LinearAdapter";
import { LINEAR_CONFIG } from "@/config";

export default class LinearAPI extends LinearAdapter {
  private client: LinearClient;

  constructor() {
    super();
    this.client = new LinearClient({ apiKey: LINEAR_CONFIG.apiKey });
  }

  async getTasksCompletedThisWeek(): Promise<number> {
    const startOfWeek = new Date();
    startOfWeek.setDate(startOfWeek.getDate() - 7);

    const { nodes: issues } = await this.client.issues({
      filter: {
        completedAt: { gte: startOfWeek.toISOString() },
      },
    });

    return issues.length;
  }
}
