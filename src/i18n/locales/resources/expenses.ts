export const expenses = {
  title: "",
  actions: {
    editExpenses: {
      trigger: "",
      dialog: {
        title: "",
        description: "",
        submit: "",
        inputs: {
          monthlyLimit: {
            label: "",
            errors: {
              invalid: "",
              min: "",
            },
          },
        },
      },
    },
    createTransaction: {
      trigger: "",
      dialog: {
        title: "",
        description: "",
        inputs: {
          title: {
            label: "",
            placeholder: "",
            errors: {
              invalid: "",
            },
          },
          amount: {
            label: "",
            errors: {
              invalid: "",
            },
          },
          combobox: {
            empty: {
              label: "",
            },
          },
        },
        submit: "",
      },
    },
  },
  cards: {
    total: "",
    totalDescription: "",
    remaining: "",
    remainingDescription: "",
    limit: "",
    limitDescription: "",
  },
  charts: {
    weekly: {
      title: "",
      description: "",
      limit: "",
      spentValue: "",
      savedValue: "",
    },
    monthly: {
      title: "",
      description: "",
      spent: "",
      consumed: "",
      represents: "",
    },
  },
  transactions: {
    title: "",
    emptyState: {
      title: "",
      description: "",
    },
  },
};
