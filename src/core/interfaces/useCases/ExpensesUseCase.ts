import ExpensesAdapter from "@/adapters/ExpensesAdapter";
import Transaction from "@/models/expenses/Transaction";
import ExpensesResponse from "@/models/expenses/ExpensesResponse";
import TransactionCategory from "@/models/expenses/TransactionCategory";

export default abstract class ExpensesUseCase {
  constructor(protected readonly adapter: ExpensesAdapter) {}

  abstract getExpenses(month: string, year: string): Promise<ExpensesResponse>;
  abstract getTransactions(): Promise<Transaction[]>;
  abstract getTransactionsCategories(): Promise<TransactionCategory[]>;
  abstract setMonthlyLimit(
    month: string,
    year: string,
    amount: number
  ): Promise<void>;
}
