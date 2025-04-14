import { LocaleSchema } from "../schema";

export const expenses: LocaleSchema["expenses"] = {
  title: "Expenses",
  actions: {
    editExpenses: {
      trigger: "Edit Expenses",
      dialog: {
        title: "Edit Expenses",
        description:
          "Make changes to your expenses here. Click save when you're done.",
        submit: "Save Changes",
        inputs: {
          monthlyLimit: {
            label: "Monthly Limit",
            errors: {
              invalid: "Please enter a valid amount",
              min: "The limit must be greater than zero",
            },
          },
        },
      },
    },
    createTransaction: {
      trigger: "Create Transaction",
      dialog: {
        title: "Create Transaction",
        description:
          "Add a new transaction to your expenses. Fill in the details below and click save.",
        inputs: {
          amount: {
            label: "Amount",
            errors: {
              invalid: "Please enter a valid amount",
            },
          },
          title: {
            label: "Title",
            placeholder: "Spotify Premium, Youtube, IFood, etc...",
            errors: {
              invalid: "Please enter a valid title",
            },
          },
          combobox: {
            empty: {
              label: 'Create "{searchValue}" category',
            },
          },
        },
        submit: "Create Transaction",
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
