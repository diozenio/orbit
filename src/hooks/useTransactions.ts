import { useQuery } from "@tanstack/react-query";
import { services } from "@/gateways";

export function useTransactions() {
  const {
    data: transactions,
    isLoading: transactionsLoading,
    error: transactionsError,
  } = useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      const transactions = await services.ExpensesService.getTransactions();
      return transactions;
    },
  });

  const {
    data: categories,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useQuery({
    queryKey: ["transactionsCategories"],
    queryFn: async () => {
      const categories =
        await services.ExpensesService.getTransactionsCategories();
      return categories;
    },
  });

  const isLoading = transactionsLoading || categoriesLoading;
  const error = transactionsError || categoriesError;

  return {
    transactions,
    categories,
    isLoading,
    error,
  };
}
