import LinearAdapter from "@/adapters/LinearAdapter";
import LinearUseCase from "@/useCases/LinearUseCase";

export default class LinearService extends LinearUseCase {
  constructor(private linearAdapter: LinearAdapter) {
    super(linearAdapter);
  }

  async getTasksCompletedThisWeek(): Promise<number> {
    return this.linearAdapter.getTasksCompletedThisWeek();
  }

  async getTotalPoints(): Promise<number> {
    return this.linearAdapter.getTotalPoints();
  }
}
