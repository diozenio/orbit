import LinearAdapter from "@/adapters/LinearAdapter";

export default class LinearAPI extends LinearAdapter {
  constructor() {
    super();
  }

  async getTasksCompletedThisWeek(): Promise<number> {
    const response = await fetch("/api/linear/tasks");
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error);
    }

    return data.weeklyTasks;
  }

  async getTotalPoints(): Promise<number> {
    const response = await fetch("/api/linear/total-points");
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error);
    }

    return data.totalPoints;
  }
}
