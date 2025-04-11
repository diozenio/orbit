import { useMutation } from "@tanstack/react-query";
import { services } from "@/gateways";
import { currentDate } from "@/lib/date";

export function useSetMonthlyLimit() {
  return useMutation({
    mutationFn: async ({ limit }: { limit: number }) => {
      const { month, year } = currentDate();

      return await services.ExpensesService.setMonthlyLimit(month, year, limit);
    },
  });
}
