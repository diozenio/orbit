import { LucideIcon } from "lucide-react";
import { StatsCard } from "./StatsCard";

export interface StatsCardData {
  title?: string;
  value?: string | number;
  description?: string;
  icon?: LucideIcon;
}

export interface StatsCardListProps {
  cards: StatsCardData[];
  isLoading?: boolean;
}

export function StatsCardList({
  cards,
  isLoading = false,
}: StatsCardListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((card, index) => (
        <StatsCard
          key={index}
          title={card.title}
          value={card.value}
          description={card.description}
          icon={card.icon}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
}
