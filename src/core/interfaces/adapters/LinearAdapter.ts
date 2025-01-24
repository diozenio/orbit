export default abstract class LinearAdapter {
  abstract getTasksCompletedThisWeek(): Promise<number>;
}
