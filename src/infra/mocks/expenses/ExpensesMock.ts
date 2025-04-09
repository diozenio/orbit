import ExpensesAdapter from "@/adapters/ExpensesAdapter";
import ExpensesResponse, {
  ExpensesResponseDTO,
} from "@/models/expenses/ExpensesResponse";
import { DailyExpensesDTO } from "@/models/expenses/DailyExpenses";
import Transaction from "@/models/expenses/Transaction";
import TransactionCategory from "@/models/expenses/TransactionCategory";

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

  async getTransactions(): Promise<Transaction[]> {
    const data = [
      {
        id: "6900796b-8ff6-4216-b6ea-70c7d179baf8",
        title: "Uber Eats",
        amount: -100,
        type: "EXPENSE",
        createdAt: "2025-04-09T17:39:56.932Z",
        updatedAt: "2025-04-09T17:39:56.932Z",
        transactionCategoryId: "00093840-ccd4-4bbe-9f75-6563cbb7c597",
      },
    ];

    return data.map(Transaction.fromJSON);
  }

  async getTransactionsCategories(): Promise<TransactionCategory[]> {
    const data = [
      {
        id: "00093840-ccd4-4bbe-9f75-6563cbb7c597",
        name: "Alimentação",
        icon: "beef",
        createdAt: "2025-04-09T17:39:46.170Z",
        updatedAt: "2025-04-09T17:39:46.170Z",
      },
    ];

    return data.map(TransactionCategory.fromJSON);
  }
}
