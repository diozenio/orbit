import ExpensesAdapter from "@/adapters/ExpensesAdapter";
import ExpensesResponse from "@/models/expenses/ExpensesResponse";
import api from "@/infra/api/client";

export default class ExpensesAPI extends ExpensesAdapter {
  constructor() {
    super();
  }

  async getExpenses(): Promise<ExpensesResponse> {
    const response = await api.get("/expenses");

    if (response.status !== 200) {
      throw new Error(response.data.error);
    }

    return ExpensesResponse.fromJSON(response.data);
  }
}
