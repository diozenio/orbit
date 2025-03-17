import { StatsCardList } from "@/components/StatsCard";
import { Scaffold } from "@/components/Scaffold";
import { i18n } from "@/i18n";

export default function HomeLayout() {
  return (
    <Scaffold title={i18n.t("stats.dashboard.title")}>
      <StatsCardList />
    </Scaffold>
  );
}
