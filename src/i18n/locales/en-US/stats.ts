import { LocaleSchema } from "../schema";

export const stats: LocaleSchema["stats"] = {
  noTitle: "No title",
  noDescription: "No description",
  dashboard: {
    title: "Dashboard",
    cards: {
      commits: {
        title: "Commits this year",
        description: `Since January ${new Date().getFullYear()}`,
      },
      tasks: {
        title: "Tasks this week",
        description: "Completed in the last 7 days",
      },
      points: {
        title: "Total Points",
        description: "From all completed tasks",
      },
    },
  },
};
