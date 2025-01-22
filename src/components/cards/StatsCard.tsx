import { LucideIcon, MinusIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { StatsCardSkeleton } from "./StatsCardSkeleton";

interface StatsCardProps {
  title?: string;
  value?: string | number;
  description?: string;
  icon?: LucideIcon;
  isLoading?: boolean;
}

export function StatsCard({
  title = "No title",
  value = 0,
  description = "No description",
  icon: Icon = MinusIcon,
  isLoading = false,
}: StatsCardProps) {
  if (isLoading) {
    return <StatsCardSkeleton />;
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-1">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
