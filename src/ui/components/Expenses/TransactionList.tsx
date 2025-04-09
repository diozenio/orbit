"use client";

import { i18n } from "@/i18n";
import { Coins, CreditCard, HandCoins } from "lucide-react";
import { EmptyState } from "@/primitives/empty-state";
import { useTransactions } from "@/hooks/useTransactions";
import { TransactionItem } from "./TransactionItem";
import TransactionCategory from "@/core/domain/models/expenses/TransactionCategory";

export function TransactionList() {
  const { transactions, categories } = useTransactions();

  const categoriesById =
    categories?.reduce((acc, category) => {
      acc[category.id] = category;
      return acc;
    }, {} as Record<string, TransactionCategory>) || {};

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold leading-none tracking-tight mb-6">
        {i18n.t("expenses.transactions.title")}
      </h2>
      <div className="space-y-4">
        {transactions?.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            title={transaction.title}
            amount={transaction.amount}
            description={
              categoriesById[transaction.transactionCategoryId]?.name
            }
            icon={categoriesById[transaction.transactionCategoryId]?.icon}
          />
        ))}
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
