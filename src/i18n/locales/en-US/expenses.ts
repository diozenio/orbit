import { LocaleSchema } from "../schema";

export const expenses: LocaleSchema["expenses"] = {
  title: "Expenses",
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
      description: "{startMonth} - {endMonth} {year}",
      spent: "Spent",
      consumed: "You consumed {spent} of a limit of {limit}",
      represents: "This represents {percentage} of your limit",
    },
  },
  transactions: {
    title: "Latest Transactions",
  },
};
