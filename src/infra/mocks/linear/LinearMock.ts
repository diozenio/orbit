import LinearAdapter from "@/core/interfaces/adapters/LinearAdapter";
import { delay } from "@/utils/delay";

export class LinearMock implements LinearAdapter {
  async getTasksCompletedThisWeek(): Promise<number> {
    await delay(1000);
    return 12;
  }

  async getTotalPoints(): Promise<number> {
    await delay(1000);
    return 156;
  }
}
