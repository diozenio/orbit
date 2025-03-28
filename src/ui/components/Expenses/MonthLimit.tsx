"use client";

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/primitives/card";
import { ChartContainer, ChartTooltip } from "@/primitives/chart";
import { i18n } from "@/i18n";
import { formatCurrency } from "@/utils/format";

interface MonthLimitProps {
  spent: number;
  limit: number;
  startMonth: string;
  endMonth: string;
  year: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload, limit, spent }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="border border-border bg-card p-2 rounded-lg shadow-lg text-center">{`${i18n.t(
        "expenses.charts.monthly.consumed",
        {
          spent: formatCurrency(spent, "BRL"),
          limit: formatCurrency(limit, "BRL"),
        }
      )}`}</div>
    );
  }

  return null;
};

export default function MonthLimit({
  spent = 0,
  limit = 0,
  endMonth,
  startMonth,
  year,
}: MonthLimitProps) {
  const percentage = Number(((spent / limit) * 100 || 100).toFixed(2));

  const chartData = [
    {
      spent: percentage,
      limit: 100 - percentage,
    },
  ];

  return (
    <Card className="flex flex-col h-full py-8">
      <CardHeader className="items-center pb-0">
        <CardTitle>{i18n.t("expenses.charts.monthly.title")}</CardTitle>
        <CardDescription>
          {i18n.t("expenses.charts.monthly.description", {
            startMonth,
            endMonth,
            year,
          })}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={{}}
          className="mx-auto aspect-square -mb-12 w-full max-w-[250px] p-0"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={100}
            outerRadius={140}
          >
            <ChartTooltip
              cursor={false}
              content={<CustomTooltip limit={limit} spent={spent} />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 24}
                          className="fill-foreground text-lg font-bold"
                        >
                          {formatCurrency(spent, "BRL")}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy || 0}
                          className="fill-muted-foreground"
                        >
                          {i18n.t("expenses.charts.monthly.spent")}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="limit"
              stackId="a"
              cornerRadius={5}
              fill="hsl(var(--muted))"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="spent"
              fill="hsl(var(--primary))"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium text-center">
          {i18n.t("expenses.charts.monthly.consumed", {
            spent: formatCurrency(spent, "BRL"),
            limit: formatCurrency(limit, "BRL"),
          })}
        </div>
        <div className="leading-none text-muted-foreground">
          {i18n.t("expenses.charts.monthly.represents", {
            percentage: `${percentage}%`,
          })}
        </div>
      </CardFooter>
    </Card>
  );
}
