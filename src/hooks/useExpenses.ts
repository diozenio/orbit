import { useQuery } from "@tanstack/react-query";
import { services } from "@/gateways";

export function useExpenses() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["expenses"],
    queryFn: async () => {
      const currentDate = new Date();
      const month = (currentDate.getMonth() + 1).toString();
      const year = currentDate.getFullYear().toString();

      return await services.ExpensesService.getExpenses(month, year);
    },
  });

  return {
    dailyExpenses: data?.dailyExpenses || [],
    totalSpent: data?.totalSpent || 0,
    dailyLimit: data?.dailyLimit || 0,
    monthlyLimit: data?.monthlyLimit || 0,
    remaining: data?.remaining || 0,
    isLoading,
    error,
  };
}
