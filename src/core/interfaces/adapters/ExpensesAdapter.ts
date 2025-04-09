import ExpensesResponse from "@/models/expenses/ExpensesResponse";
import TransactionCategory from "@/models/expenses/TransactionCategory";

export default abstract class ExpensesAdapter {
  abstract getExpenses(): Promise<ExpensesResponse>;
  abstract getTransactionsCategories(): Promise<TransactionCategory[]>;
}
