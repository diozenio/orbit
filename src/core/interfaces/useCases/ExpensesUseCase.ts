import ExpensesAdapter from "@/adapters/ExpensesAdapter";
import Transaction from "@/models/expenses/Transaction";
import ExpensesResponse from "@/models/expenses/ExpensesResponse";
import TransactionCategory from "@/models/expenses/TransactionCategory";

export default abstract class ExpensesUseCase {
  constructor(protected readonly adapter: ExpensesAdapter) {}

  abstract getExpenses(): Promise<ExpensesResponse>;
  abstract getTransactions(): Promise<Transaction[]>;
  abstract getTransactionsCategories(): Promise<TransactionCategory[]>;
}
