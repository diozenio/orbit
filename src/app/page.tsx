import { SidebarTrigger } from "@/components/ui/sidebar";
import { GitCommit, CheckSquare } from "lucide-react";
import {
  StatsCardList,
  type StatsCardData,
} from "@/components/cards/StatsCardList";

export default function Home() {
  const statsCards: StatsCardData[] = [
    {
      title: "Commits this year",
      value: 1234,
      description: "Since January 2025",
      icon: GitCommit,
    },
    {
      title: "Tasks this week",
      value: 15,
      description: "Completed in the last 7 days",
      icon: CheckSquare,
    },
  ];

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex flex-row gap-1 items-center">
        <SidebarTrigger className="flex md:hidden" />
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
      </div>
      <StatsCardList cards={statsCards} />
    </main>
  );
}
