import ExpensesUseCase from "@/useCases/ExpensesUseCase";
import ExpensesResponse from "@/models/expenses/ExpensesResponse";
import Transaction from "@/models/expenses/Transaction";
import TransactionCategory from "@/models/expenses/TransactionCategory";

export default class ExpensesService extends ExpensesUseCase {
  async getExpenses(month: string, year: string): Promise<ExpensesResponse> {
    return this.adapter.getExpenses(month, year);
  }

  async getTransactions(): Promise<Transaction[]> {
    return this.adapter.getTransactions();
  }

  async getTransactionsCategories(): Promise<TransactionCategory[]> {
    return this.adapter.getTransactionsCategories();
  }

  async setMonthlyLimit(
    month: string,
    year: string,
    amount: number
  ): Promise<void> {
    return this.adapter.setMonthlyLimit(month, year, amount);
  }

  async createTransaction(transactions: Transaction[]): Promise<void> {
    return this.adapter.createTransaction(transactions);
  }
}
