import { SidebarTrigger } from "@/primitives/sidebar";
import { StatsCardList } from "@/components/StatsCard";

import { i18n } from "@/i18n";

export default function HomeLayout() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex flex-row gap-1 items-center">
        <SidebarTrigger className="flex md:hidden" />
        <h1 className="text-xl font-semibold">
          {i18n.t("stats.dashboard.title")}
        </h1>
      </div>
      <StatsCardList />
    </main>
  );
}
