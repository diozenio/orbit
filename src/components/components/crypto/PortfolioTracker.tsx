import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { i18n } from "@/i18n";
import { useState } from "react";

interface CryptoAsset {
  id: string;
  name: string;
  symbol: string;
  price: number;
  changes: {
    "1h": number;
    "12h": number;
    "24h": number;
    "7d": number;
    "30d": number;
  };
  amount: number;
  value: number;
  imageUrl: string;
}

type SortField =
  | "name"
  | "price"
  | "1h"
  | "12h"
  | "24h"
  | "7d"
  | "30d"
  | "amount"
  | "value";
type SortOrder = "asc" | "desc";

const mockData: CryptoAsset[] = [
  // ... mockData ...
];

const PriceChange = ({ value }: { value: number }) => (
  <div className="flex items-center gap-1">
    <div className="w-3 h-3 flex items-center justify-center">
      {value > 0 ? (
        <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[5px] border-b-emerald-300" />
      ) : (
        <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[5px] border-t-red-500" />
      )}
    </div>
    <span
      className={`text-xs ${value > 0 ? "text-emerald-300" : "text-red-500"}`}
    >
      {value > 0 ? "+" : ""}
      {value.toFixed(2)}%
    </span>
  </div>
);

const SortableHeader = ({
  field,
  children,
  currentSort,
  onSort,
  className = "",
}: {
  field: SortField;
  children: React.ReactNode;
  currentSort: { field: SortField; order: SortOrder };
  onSort: (field: SortField) => void;
  className?: string;
}) => {
  const isCurrentSort = currentSort.field === field;
  return (
    <TableHead
      className={`text-sm cursor-pointer hover:bg-muted/50 transition-colors ${
        isCurrentSort ? "font-bold text-foreground" : "text-muted-foreground"
      } ${className}`}
      onClick={() => onSort(field)}
    >
      {children}
    </TableHead>
  );
};

export function PortfolioTracker() {
  const [sort, setSort] = useState<{ field: SortField; order: SortOrder }>({
    field: "name",
    order: "desc",
  });

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "USD",
      currencyDisplay: "narrowSymbol",
    }).format(value);
  };

  const handleSort = (field: SortField) => {
    setSort((prev) => ({
      field,
      order: prev.field === field && prev.order === "desc" ? "asc" : "desc",
    }));
  };

  const sortedData = [...mockData].sort((a, b) => {
    const multiplier = sort.order === "desc" ? 1 : -1;

    switch (sort.field) {
      case "name":
        return multiplier * b.name.localeCompare(a.name);
      case "price":
        return multiplier * (b.price - a.price);
      case "1h":
      case "12h":
      case "24h":
      case "7d":
      case "30d":
        return multiplier * (b.changes[sort.field] - a.changes[sort.field]);
      case "amount":
        return multiplier * (b.amount - a.amount);
      case "value":
        return multiplier * (b.value - a.value);
      default:
        return 0;
    }
  });

  const totalValue = sortedData.reduce((acc, asset) => acc + asset.value, 0);

  return (
    <div className="w-full">
      <div className="border rounded-lg overflow-hidden">
        <div className="flex justify-between items-center px-4 py-4 border-b bg-muted/40">
          <div className="flex flex-col gap-1">
            <h2 className="text-base font-medium">
              {i18n.t("stats.crypto.title")}
            </h2>
            <span className="text-xs text-muted-foreground">
              {i18n.t("stats.crypto.subtitle")}
            </span>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-xs text-muted-foreground">
              {i18n.t("stats.crypto.portfolioTotal")}
            </span>
            <span className="text-base font-medium">
              {formatCurrency(totalValue)}
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <SortableHeader
                  field="name"
                  currentSort={sort}
                  onSort={handleSort}
                  className="pr-2"
                >
                  {i18n.t("stats.crypto.table.headers.asset")}
                </SortableHeader>
                <SortableHeader
                  field="price"
                  currentSort={sort}
                  onSort={handleSort}
                  className="px-2"
                >
                  {i18n.t("stats.crypto.table.headers.price")}
                </SortableHeader>
                <SortableHeader
                  field="24h"
                  currentSort={sort}
                  onSort={handleSort}
                  className="text-center hidden sm:table-cell"
                >
                  24h
                </SortableHeader>
                <SortableHeader
                  field="7d"
                  currentSort={sort}
                  onSort={handleSort}
                  className="text-center hidden md:table-cell"
                >
                  7d
                </SortableHeader>
                <SortableHeader
                  field="30d"
                  currentSort={sort}
                  onSort={handleSort}
                  className="text-center hidden lg:table-cell"
                >
                  30d
                </SortableHeader>
                <SortableHeader
                  field="amount"
                  currentSort={sort}
                  onSort={handleSort}
                  className="hidden sm:table-cell"
                >
                  {i18n.t("stats.crypto.table.headers.amount")}
                </SortableHeader>
                <SortableHeader
                  field="value"
                  currentSort={sort}
                  onSort={handleSort}
                  className="text-right pl-2"
                >
                  {i18n.t("stats.crypto.table.headers.total")}
                </SortableHeader>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedData.map((asset) => (
                <TableRow key={asset.id}>
                  <TableCell className="pr-2">
                    <div className="flex items-center gap-1.5 min-w-24">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={asset.imageUrl} alt={asset.name} />
                        <AvatarFallback>{asset.symbol}</AvatarFallback>
                      </Avatar>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm whitespace-nowrap">
                          {asset.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          ({asset.symbol})
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm whitespace-nowrap px-2">
                    {formatCurrency(asset.price)}
                  </TableCell>
                  <TableCell className="text-center hidden sm:table-cell">
                    <PriceChange value={asset.changes["24h"]} />
                  </TableCell>
                  <TableCell className="text-center hidden md:table-cell">
                    <PriceChange value={asset.changes["7d"]} />
                  </TableCell>
                  <TableCell className="text-center hidden lg:table-cell">
                    <PriceChange value={asset.changes["30d"]} />
                  </TableCell>
                  <TableCell className="text-sm hidden sm:table-cell">
                    {asset.amount}
                  </TableCell>
                  <TableCell className="text-sm text-right whitespace-nowrap pl-2">
                    {formatCurrency(asset.value)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
