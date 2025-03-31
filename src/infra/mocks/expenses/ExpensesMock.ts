import ExpensesAdapter from "@/adapters/ExpensesAdapter";
import ExpensesResponse, {
  ExpensesResponseDTO,
} from "@/models/expenses/ExpensesResponse";
import { DailyExpensesDTO } from "@/core/domain/models/expenses/DailyExpenses";

const dailyExpenses: DailyExpensesDTO[] = [
  { date: "2025-03-24", amount: 100 },
  { date: "2025-03-25", amount: 23 },
  { date: "2025-03-26", amount: 40 },
  { date: "2025-03-27", amount: 90 },
  { date: "2025-03-28", amount: -20 },
  { date: "2025-03-29", amount: 30 },
  { date: "2025-03-30", amount: 95 },
];

export default class ExpensesMock extends ExpensesAdapter {
  constructor() {
    super();
  }

  async getExpenses(): Promise<ExpensesResponse> {
    const expensesResponse: ExpensesResponseDTO = {
      dailyExpenses,
      totalSpent: 1290.32,
      dailyLimit: 100,
      monthlyLimit: 2500,
      remaining: 1209.68,
      startMonth: "January",
      endMonth: "February",
      year: "2024",
    };

    return ExpensesResponse.fromJSON(expensesResponse);
  }
}
