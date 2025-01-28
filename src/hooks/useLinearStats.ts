import { useEffect, useState } from "react";
import { services } from "@/di/DIContainer";

export function useLinearStats() {
  const [weeklyTasks, setWeeklyTasks] = useState<number>(0);
  const [totalPoints, setTotalPoints] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [tasks, total] = await Promise.all([
          services.LinearService.getTasksCompletedThisWeek(),
          services.LinearService.getTotalPoints(),
        ]);
        setWeeklyTasks(tasks);
        setTotalPoints(total);
      } catch (error) {
        console.error("Error fetching Linear statistics:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchStats();
  }, []);

  return { weeklyTasks, totalPoints, isLoading };
}
