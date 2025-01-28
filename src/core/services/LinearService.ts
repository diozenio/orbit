import LinearAdapter from "@/adapters/LinearAdapter";

export default class LinearService {
  constructor(private linearAdapter: LinearAdapter) {}

  async getTasksCompletedThisWeek(): Promise<number> {
    return this.linearAdapter.getTasksCompletedThisWeek();
  }

  async getTotalPoints(): Promise<number> {
    return this.linearAdapter.getTotalPoints();
  }
}
