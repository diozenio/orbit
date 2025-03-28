import ExpensesUseCase from "@/useCases/ExpensesUseCase";
import ExpensesResponse from "@/models/expenses/ExpensesResponse";

export default class ExpensesService extends ExpensesUseCase {
  async getExpenses(): Promise<ExpensesResponse> {
    return this.adapter.getExpenses();
  }
}
