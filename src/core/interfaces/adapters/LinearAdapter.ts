export default abstract class LinearAdapter {
  abstract getTasksCompletedThisWeek(): Promise<number>;
  abstract getTotalPoints(): Promise<number>;
}
