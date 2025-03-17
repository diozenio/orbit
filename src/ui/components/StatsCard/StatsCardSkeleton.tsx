import { Card, CardHeader, CardContent } from "@/primitives/card";
import { Skeleton } from "@/primitives/skeleton";

export function StatsCardSkeleton() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <Skeleton className="h-4 w-[100px] rounded-sm" />
        <Skeleton className="h-4 w-4 rounded-sm" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-8 w-[60px] mb-1 rounded-sm" />
        <Skeleton className="h-3 w-[140px] rounded-sm" />
      </CardContent>
    </Card>
  );
}
