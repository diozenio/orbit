export function calculateTaskPoints(priority: number): number {
  const pointsMap: Record<number, number> = {
    0: 10, // low
    1: 20, // medium
    2: 30, // high
    3: 50, // urgent
  };
  return pointsMap[priority] || 10;
}
