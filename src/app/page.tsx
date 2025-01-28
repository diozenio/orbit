"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { GitCommit, CheckSquare, Trophy } from "lucide-react";
import {
  StatsCardList,
  type StatsCardData,
} from "@/components/cards/StatsCardList";
import { useGithubStats } from "@/hooks/useGithubStats";
import { useLinearStats } from "@/hooks/useLinearStats";

export default function Home() {
  const { yearlyCommits, isLoading: isLoadingGithub } = useGithubStats();
  const {
    weeklyTasks,
    totalPoints,
    isLoading: isLoadingLinear,
  } = useLinearStats();

  const statsCards: StatsCardData[] = [
    {
      title: "Commits this year",
      value: yearlyCommits,
      description: `Since January ${new Date().getFullYear()}`,
      icon: GitCommit,
    },
    {
      title: "Tasks this week",
      value: weeklyTasks,
      description: "Completed in the last 7 days",
      icon: CheckSquare,
    },
    {
      title: "Total Points",
      value: totalPoints,
      description: "From all completed tasks",
      icon: Trophy,
    },
  ];

  const isLoading = isLoadingGithub || isLoadingLinear;

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex flex-row gap-1 items-center">
        <SidebarTrigger className="flex md:hidden" />
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
      </div>
      <StatsCardList cards={statsCards} isLoading={isLoading} />
    </main>
  );
}
