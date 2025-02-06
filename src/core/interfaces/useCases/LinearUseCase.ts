import LinearAdapter from "@/adapters/LinearAdapter";

export default abstract class LinearUseCase {
  constructor(protected readonly adapter: LinearAdapter) {}

  abstract getTasksCompletedThisWeek(): Promise<number>;
  abstract getTotalPoints(): Promise<number>;
}
