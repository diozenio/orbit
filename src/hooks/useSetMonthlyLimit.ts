import { useMutation } from "@tanstack/react-query";
import { services } from "@/gateways";

export function useSetMonthlyLimit() {
  return useMutation({
    mutationFn: async ({
      month,
      year,
      limit,
    }: {
      month: string;
      year: string;
      limit: number;
    }) => {
      return await services.ExpensesService.setMonthlyLimit(month, year, limit);
    },
  });
}
