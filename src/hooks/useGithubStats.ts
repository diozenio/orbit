import { useEffect, useState } from "react";
import { services } from "@/gateways";

export function useGithubStats() {
  const [yearlyCommits, setYearlyCommits] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const contributions =
          await services.GithubService.getYearlyContributions();

        setYearlyCommits(contributions.getTotalCommits());
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch commits"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchCommits();
  }, []);

  return {
    yearlyCommits,
    isLoading,
    error,
  };
}
