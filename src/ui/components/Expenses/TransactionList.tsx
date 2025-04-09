import { i18n } from "@/i18n";
import { Coins, CreditCard, HandCoins } from "lucide-react";
import { EmptyState } from "@/primitives/empty-state";
import { TransactionItem } from "./TransactionItem";
import { Youtube, Utensils, Car, ShoppingBag } from "lucide-react";

const transactions = [
  {
    icon: Youtube,
    title: "Youtube Premium",
    description: "Entretenimento",
    value: 19.9,
  },
  {
    icon: Utensils,
    title: "iFood",
    description: "Alimentação",
    value: 45.9,
  },
  {
    icon: Car,
    title: "Uber",
    description: "Transporte",
    value: 25.0,
  },
  {
    icon: ShoppingBag,
    title: "Supermercado",
    description: "Alimentação",
    value: 127.54,
  },
  {
    icon: ShoppingBag,
    title: "Supermercado",
    description: "Alimentação",
    value: 127.54,
  },
  {
    icon: ShoppingBag,
    title: "Supermercado",
    description: "Alimentação",
    value: 127.54,
  },
  {
    icon: ShoppingBag,
    title: "Supermercado",
    description: "Alimentação",
    value: 127.54,
  },
];

export function TransactionList() {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold leading-none tracking-tight mb-6">
        {i18n.t("expenses.transactions.title")}
      </h2>
      <div className="space-y-4">
        {transactions?.length === 0 && (
          <EmptyState
            className="mx-auto w-full max-w-none border-none hover:bg-background"
            icons={[CreditCard, Coins, HandCoins]}
            title={i18n.t("expenses.transactions.emptyState.title")}
            description={i18n.t("expenses.transactions.emptyState.description")}
          />
        )}
      </div>
    </div>
  );
}
