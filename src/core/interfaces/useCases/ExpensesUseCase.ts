import ExpensesAdapter from "@/adapters/ExpensesAdapter";
import ExpensesResponse from "@/models/expenses/ExpensesResponse";

export default abstract class ExpensesUseCase {
  constructor(protected readonly adapter: ExpensesAdapter) {}

  abstract getExpenses(): Promise<ExpensesResponse>;
}
