import { Card } from "@/primitives/card";
import { Icon } from "@/ui/primitives/icon";
import { formatCurrency } from "@/utils/format";

interface TransactionItemProps {
  icon?: string;
  title: string;
  description: string;
  amount: number;
}

export function TransactionItem({
  icon = "credit-card",
  title,
  description,
  amount,
}: TransactionItemProps) {
  return (
    <Card className="border-0 flex items-center w-full justify-between shadow-none">
      <div className="flex items-center gap-4">
        <div className="h-12 aspect-square rounded-lg flex items-center justify-center bg-muted">
          <Icon name={icon} color="hsl(var(--muted-foreground))" />
        </div>
        <div className="flex flex-col">
          <span className="font-medium">{title}</span>
          <span className="text-sm text-muted-foreground">{description}</span>
        </div>
      </div>
      <span className="font-medium">{formatCurrency(amount, "BRL")}</span>
    </Card>
  );
}
