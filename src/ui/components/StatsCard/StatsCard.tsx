import { LucideIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/primitives/card";
import { StatsCardSkeleton } from "./StatsCardSkeleton";
import { formatNumber } from "@/utils/format";
import { i18n } from "@/i18n";
import { cn } from "@/lib/utils";

export interface StatsCardProps {
  title?: string;
  value?: string | number;
  description?: string;
  icon?: LucideIcon;
  isLoading?: boolean;
  className?: string;
}

export function StatsCard({
  title = i18n.t("stats.noTitle"),
  value = 0,
  description = i18n.t("stats.noDescription"),
  icon: Icon,
  isLoading = false,
  className,
}: StatsCardProps) {
  if (isLoading) {
    return <StatsCardSkeleton />;
  }

  return (
    <Card className={cn(className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-1">{formatNumber(value)}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
