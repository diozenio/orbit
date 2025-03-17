import { useQuery } from "@tanstack/react-query";
import { services } from "@/gateways";

export function useLinearStats() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["linearStats"],
    queryFn: async () => {
      const [tasks, total] = await Promise.all([
        services.LinearService.getTasksCompletedThisWeek(),
        services.LinearService.getTotalPoints(),
      ]);
      return { weeklyTasks: tasks, totalPoints: total };
    },
  });

  return {
    weeklyTasks: data?.weeklyTasks ?? 0,
    totalPoints: data?.totalPoints ?? 0,
    isLoading,
    error,
  };
}
