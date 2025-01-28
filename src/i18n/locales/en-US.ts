import type { LocaleSchema } from "./schema";

export const enUS: LocaleSchema = {
  app: {
    title: "Orbit",
    description: "Everything that orbits around you, centralized.",
  },
  stats: {
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
  },
  common: {
    loading: "Loading...",
    error: "Error",
    success: "Success",
  },
};
