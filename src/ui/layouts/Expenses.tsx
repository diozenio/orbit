import { Scaffold } from "@/components/Scaffold";
import { StatsCard } from "@/components/StatsCard";
import { i18n } from "@/i18n";
import { formatCurrency } from "@/utils/format";
import { CreditCard } from "lucide-react";
import WeeklyChart from "@/components/Expenses/WeeklyChart";
import MonthLimit from "@/components/Expenses/MonthLimit";
import { TransactionList } from "@/components/Expenses/TransactionList";

const chartData = [
  { day: "Segunda", value: 100 },
  { day: "Terça", value: 23 },
  { day: "Quarta", value: 40 },
  { day: "Quinta", value: 90 },
  { day: "Sexta", value: -20 },
  { day: "Sábado", value: 30 },
  { day: "Domingo", value: 95 },
];

export default function ExpensesLayout() {
  return (
    <Scaffold title={i18n.t("expenses.title")}>
      <div className="grid gap-4 md:grid-cols-3 ">
        <StatsCard
          title={i18n.t("expenses.cards.total")}
          description={i18n.t("expenses.cards.totalDescription")}
          icon={CreditCard}
          value={formatCurrency(238.23, "BRL")}
        />
        <StatsCard
          title={i18n.t("expenses.cards.remaining")}
          description={i18n.t("expenses.cards.remainingDescription")}
          icon={CreditCard}
          value={formatCurrency(2141.77, "BRL")}
        />
        <StatsCard
          title={i18n.t("expenses.cards.limit")}
          description={i18n.t("expenses.cards.limitDescription")}
          icon={CreditCard}
          value={formatCurrency(2500, "BRL")}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <WeeklyChart dailyLimit={100} chartData={chartData} />
        <MonthLimit
          limit={2500}
          spent={1200}
          year={"2024"}
          startMonth="January"
          endMonth="February"
        />
      </div>
      <div className="w-full">
        <TransactionList />
      </div>
    </Scaffold>
  );
}
