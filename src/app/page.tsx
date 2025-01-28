"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { GitCommit, CheckSquare, Trophy } from "lucide-react";
import {
  StatsCardList,
  type StatsCardData,
} from "@/components/cards/StatsCardList";
import { useGithubStats } from "@/hooks/useGithubStats";
import { useLinearStats } from "@/hooks/useLinearStats";
import { i18n } from "@/i18n";

export default function Home() {
  const { yearlyCommits, isLoading: isLoadingGithub } = useGithubStats();
  const {
    weeklyTasks,
    totalPoints,
    isLoading: isLoadingLinear,
  } = useLinearStats();

  const statsCards: StatsCardData[] = [
    {
      title: i18n.t("stats.dashboard.cards.commits.title"),
      value: yearlyCommits,
      description: i18n.t("stats.dashboard.cards.commits.description"),
      icon: GitCommit,
    },
    {
      title: i18n.t("stats.dashboard.cards.tasks.title"),
      value: weeklyTasks,
      description: i18n.t("stats.dashboard.cards.tasks.description"),
      icon: CheckSquare,
    },
    {
      title: i18n.t("stats.dashboard.cards.points.title"),
      value: totalPoints,
      description: i18n.t("stats.dashboard.cards.points.description"),
      icon: Trophy,
    },
  ];

  const isLoading = isLoadingGithub || isLoadingLinear;

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex flex-row gap-1 items-center">
        <SidebarTrigger className="flex md:hidden" />
        <h1 className="text-lg font-semibold md:text-2xl">
          {i18n.t("stats.dashboard.title")}
        </h1>
      </div>
      <StatsCardList cards={statsCards} isLoading={isLoading} />
    </main>
  );
}
