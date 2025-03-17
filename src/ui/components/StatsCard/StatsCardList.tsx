"use client";

import { CheckSquare, GitCommit, Trophy } from "lucide-react";
import { StatsCard, StatsCardProps } from "./StatsCard";
import { useLinearStats } from "@/hooks/useLinearStats";
import { i18n } from "@/i18n";
import { useGithubStats } from "@/hooks/useGithubStats";

export function StatsCardList() {
  const { yearlyCommits, isLoading: isLoadingGithub } = useGithubStats();
  const {
    weeklyTasks,
    totalPoints,
    isLoading: isLoadingLinear,
  } = useLinearStats();

  const cards: StatsCardProps[] = [
    {
      title: i18n.t("stats.dashboard.cards.commits.title"),
      value: yearlyCommits,
      description: i18n.t("stats.dashboard.cards.commits.description"),
      icon: GitCommit,
      isLoading: isLoadingGithub,
    },
    {
      title: i18n.t("stats.dashboard.cards.tasks.title"),
      value: weeklyTasks,
      description: i18n.t("stats.dashboard.cards.tasks.description"),
      icon: CheckSquare,
      isLoading: isLoadingLinear,
    },
    {
      title: i18n.t("stats.dashboard.cards.points.title"),
      value: totalPoints,
      description: i18n.t("stats.dashboard.cards.points.description"),
      icon: Trophy,
      isLoading: isLoadingLinear,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((card, index) => (
        <StatsCard key={`${card.title}-${index}`} {...card} />
      ))}
    </div>
  );
}
