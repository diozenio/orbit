import ExpensesResponse from "@/models/expenses/ExpensesResponse";

export default abstract class ExpensesAdapter {
  abstract getExpenses(): Promise<ExpensesResponse>;
}
