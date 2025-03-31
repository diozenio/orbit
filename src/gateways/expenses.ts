import { isDevelopment } from "@/constants/environment";

import ExpensesMock from "@/mocks/expenses/ExpensesMock";
import ExpensesAPI from "@/api/expenses";

export const expensesGateway = isDevelopment
  ? new ExpensesMock()
  : new ExpensesAPI();
