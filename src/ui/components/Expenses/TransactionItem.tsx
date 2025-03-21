import { Card } from "@/primitives/card";
import { formatCurrency } from "@/utils/format";
import { LucideIcon } from "lucide-react";

interface TransactionItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  value: number;
}

export function TransactionItem({
  icon: Icon,
  title,
  description,
  value,
}: TransactionItemProps) {
  return (
    <Card className="border-0 flex items-center w-full justify-between shadow-none">
      <div className="flex items-center gap-4">
        <div className="h-12 aspect-square rounded-lg flex items-center justify-center bg-muted">
          <Icon size={16} color="hsl(var(--muted-foreground))" />
        </div>
        <div className="flex flex-col">
          <span className="font-medium">{title}</span>
          <span className="text-sm text-muted-foreground">{description}</span>
        </div>
      </div>
      <span className="font-medium">{formatCurrency(value, "BRL")}</span>
    </Card>
  );
}
