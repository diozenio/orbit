import ExpensesAdapter from "@/adapters/ExpensesAdapter";
import ExpensesResponse from "@/models/expenses/ExpensesResponse";
import TransactionCategory from "@/models/expenses/TransactionCategory";

export default abstract class ExpensesUseCase {
  constructor(protected readonly adapter: ExpensesAdapter) {}

  abstract getExpenses(): Promise<ExpensesResponse>;
  abstract getTransactionsCategories(): Promise<TransactionCategory[]>;
}
