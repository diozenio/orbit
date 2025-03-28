"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  XAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/primitives/card";
import { ChartContainer, ChartTooltip } from "@/primitives/chart";
import { formatCurrency } from "@/utils/format";
import { i18n } from "@/i18n";
import { DailyExpensesDTO } from "@/core/domain/models/expenses/DailyExpenses";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload, dailyLimit }: any) => {
  if (active && payload && payload.length) {
    let label = i18n.t("expenses.charts.weekly.savedValue");
    let value = payload[0].value;

    if (value < 0) {
      label = i18n.t("expenses.charts.weekly.spentValue");
      value = dailyLimit + Math.abs(value);
    }

    return (
      <div className="border border-border bg-card p-2 rounded-lg shadow-lg">{`${label}: ${formatCurrency(
        value,
        "BRL"
      )}`}</div>
    );
  }

  return null;
};

interface WeeklyChartProps {
  dailyLimit: number;
  dailyExpenses: DailyExpensesDTO[];
}

export default function WeeklyChart({
  dailyLimit,
  dailyExpenses,
}: WeeklyChartProps) {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="flex flex-row justify-between items-start w-full">
        <div className="space-y-1.5">
          <CardTitle>{i18n.t("expenses.charts.weekly.title")}</CardTitle>
          <CardDescription>
            {i18n.t("expenses.charts.weekly.description")}
          </CardDescription>
        </div>
        <div className="text-sm text-muted-foreground leading-none">
          {i18n.t("expenses.charts.weekly.limit")}:{" "}
          <span className="font-medium text-foreground">
            {formatCurrency(dailyLimit, "BRL")}
          </span>
        </div>
      </CardHeader>
      <CardContent className="h-full">
        <ResponsiveContainer width="100%" height={280}>
          <ChartContainer config={{}}>
            <BarChart accessibilityLayer data={dailyExpenses}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="day"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <ChartTooltip
                content={<CustomTooltip hideLabel dailyLimit={dailyLimit} />}
              />
              <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
                {dailyExpenses.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      entry.amount < 0
                        ? "hsl(var(--muted))"
                        : "hsl(var(--primary))"
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ChartContainer>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
