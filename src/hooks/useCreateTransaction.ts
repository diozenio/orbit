import { useMutation } from "@tanstack/react-query";
import { services } from "@/gateways";
import Transaction from "@/models/expenses/Transaction";

export function useCreateTransaction() {
  return useMutation({
    mutationFn: async (transactions: Transaction[]) => {
      return await services.ExpensesService.createTransaction(transactions);
    },
  });
}
