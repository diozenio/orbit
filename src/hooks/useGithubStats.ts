import { useQuery } from "@tanstack/react-query";
import { services } from "@/gateways";

export function useGithubStats() {
  const currentYear = new Date().getFullYear();
  const startOfYear = new Date(currentYear, 0, 1);

  const { data, isLoading, error } = useQuery({
    queryKey: ["githubStats"],
    queryFn: async () => {
      const contributions = await services.GithubService.getContributionsSince(
        startOfYear
      );
      return contributions.getTotalCommits();
    },
  });

  return {
    yearlyCommits: data ?? 0,
    isLoading,
    error,
  };
}
