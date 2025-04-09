import ExpensesUseCase from "@/useCases/ExpensesUseCase";
import ExpensesResponse from "@/models/expenses/ExpensesResponse";
import Transaction from "@/models/expenses/Transaction";
import TransactionCategory from "@/models/expenses/TransactionCategory";

export default class ExpensesService extends ExpensesUseCase {
  async getExpenses(): Promise<ExpensesResponse> {
    return this.adapter.getExpenses();
  }

  async getTransactions(): Promise<Transaction[]> {
    return this.adapter.getTransactions();
  }

  async getTransactionsCategories(): Promise<TransactionCategory[]> {
    return this.adapter.getTransactionsCategories();
  }
}
