import { useEffect, useState } from "react";
import { services } from "@/di/DIContainer";

export function useLinearStats() {
  const [weeklyTasks, setWeeklyTasks] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const tasks = await services.LinearService.getTasksCompletedThisWeek();
        setWeeklyTasks(tasks);
      } catch (error) {
        console.error("Erro ao buscar estatísticas do Linear:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchStats();
  }, []);

  return { weeklyTasks, isLoading };
}
