import ExpensesUseCase from "@/useCases/ExpensesUseCase";
import ExpensesResponse from "@/models/expenses/ExpensesResponse";
import TransactionCategory from "@/models/expenses/TransactionCategory";

export default class ExpensesService extends ExpensesUseCase {
  async getExpenses(): Promise<ExpensesResponse> {
    return this.adapter.getExpenses();
  }

  async getTransactionsCategories(): Promise<TransactionCategory[]> {
    return this.adapter.getTransactionsCategories();
  }
}
