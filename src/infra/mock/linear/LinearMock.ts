import LinearAdapter from "@/core/interfaces/adapters/LinearAdapter";

export class LinearMock implements LinearAdapter {
  async getTasksCompletedThisWeek(): Promise<number> {
    return 12;
  }

  async getTotalPoints(): Promise<number> {
    return 156;
  }
}
