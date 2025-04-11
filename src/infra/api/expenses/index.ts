import ExpensesAdapter from "@/adapters/ExpensesAdapter";
import ExpensesResponse from "@/models/expenses/ExpensesResponse";
import api from "@/infra/api/client";
import Transaction from "@/models/expenses/Transaction";
import TransactionCategory from "@/models/expenses/TransactionCategory";

export default class ExpensesAPI extends ExpensesAdapter {
  constructor() {
    super();
  }

  async getExpenses(month?: string, year?: string): Promise<ExpensesResponse> {
    const response = await api.get("/expenses", {
      params: {
        month,
        year,
      },
    });

    if (response.status !== 200) {
      throw new Error(response.data.error);
    }

    return ExpensesResponse.fromJSON(response.data);
  }

  async getTransactions(): Promise<Transaction[]> {
    const response = await api.get("/expenses/transactions");

    if (response.status !== 200) {
      throw new Error(response.data.error);
    }

    return response.data.map(Transaction.fromJSON);
  }

  async getTransactionsCategories(): Promise<TransactionCategory[]> {
    const response = await api.get("/expenses/transactions/categories");

    if (response.status !== 200) {
      throw new Error(response.data.error);
    }

    return response.data.map(TransactionCategory.fromJSON);
  }

  async setMonthlyLimit(
    month: string,
    year: string,
    amount: number
  ): Promise<void> {
    const response = await api.post("/expenses/monthly-limit", {
      month,
      year,
      amount,
    });

    if (response.status !== 200) {
      throw new Error(response.data.error);
    }
  }
}
