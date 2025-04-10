"use client";

import { Scaffold } from "@/components/Scaffold";
import { StatsCard } from "@/components/StatsCard";
import { i18n } from "@/i18n";
import { formatCurrency } from "@/utils/format";
import { Coins, CreditCard, HandCoins } from "lucide-react";
import WeeklyChart from "@/components/Expenses/WeeklyChart";
import MonthLimit from "@/components/Expenses/MonthLimit";
import { TransactionList } from "@/components/Expenses/TransactionList";
import { useExpenses } from "@/hooks/useExpenses";
import { Spinner } from "@/ui/primitives/spinner";

export default function ExpensesLayout() {
  const {
    dailyExpenses,
    totalSpent,
    dailyLimit,
    monthlyLimit,
    remaining,
    isLoading,
  } = useExpenses();

  if (isLoading) {
    return (
      <div className="size-full flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <Scaffold title={i18n.t("expenses.title")}>
      <div className="grid gap-4 grid-cols-1 @2xl/main:grid-cols-3">
        <StatsCard
          title={i18n.t("expenses.cards.total")}
          description={i18n.t("expenses.cards.totalDescription")}
          icon={CreditCard}
          value={formatCurrency(totalSpent, "BRL")}
        />
        <StatsCard
          title={i18n.t("expenses.cards.remaining")}
          description={i18n.t("expenses.cards.remainingDescription")}
          icon={HandCoins}
          value={formatCurrency(remaining, "BRL")}
        />
        <StatsCard
          title={i18n.t("expenses.cards.limit")}
          description={i18n.t("expenses.cards.limitDescription")}
          icon={Coins}
          value={formatCurrency(monthlyLimit, "BRL")}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <WeeklyChart
          dailyLimit={dailyLimit}
          dailyExpenses={dailyExpenses.map((expense) => expense.toJSON())}
        />
        <MonthLimit limit={monthlyLimit} spent={totalSpent} />
      </div>
      <div className="w-full">
        <TransactionList />
      </div>
    </Scaffold>
  );
}
