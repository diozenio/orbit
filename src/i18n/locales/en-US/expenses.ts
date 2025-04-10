import { LocaleSchema } from "../schema";

export const expenses: LocaleSchema["expenses"] = {
  title: "Expenses",
  actions: {
    trigger: "Edit Expenses",
    dialog: {
      title: "Edit Expenses",
      description:
        "Make changes to your expenses here. Click save when you're done.",
      submit: "Save Changes",
      inputs: {
        monthlyLimit: "Monthly Limit",
      },
    },
  },
  cards: {
    total: "Total Expenses",
    totalDescription: "Total expenses for the month",
    remaining: "Remaining Balance",
    remainingDescription: "Remaining balance for the month",
    limit: "Expense Limit",
    limitDescription: "Expense limit for the month",
  },
  charts: {
    weekly: {
      title: "Daily Expenses and Savings",
      description: "Last week monitoring",
      limit: "Daily limit",
      spentValue: "Spent value",
      savedValue: "Saved value",
    },
    monthly: {
      title: "Total Monthly Value",
      description: "Your Spending Summary",
      spent: "Spent",
      consumed: "You consumed {spent} of a limit of {limit}",
      represents: "This represents {percentage} of your limit",
    },
  },
  transactions: {
    title: "Latest Transactions",
    emptyState: {
      title: "No transactions found",
      description: "Add a transaction to start tracking your expenses",
    },
  },
};
