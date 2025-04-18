"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/primitives/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/primitives/avatar";
import { i18n } from "@/i18n";
import {
  SortableHeaderProps,
  PriceChangeProps,
  PortfolioTrackerProps,
  CryptoAsset,
} from "./PortfolioTracker.types";
import { useTableFunctions } from "@/utils/table";
import { formatCurrency } from "@/utils/format";

const PriceChange = ({ value }: PriceChangeProps) => (
  <div className="flex items-center">
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
      {Math.abs(value).toFixed(2)}%
    </span>
  </div>
);

const SortableHeader = ({
  field,
  children,
  currentSort,
  onSort,
  className = "",
}: SortableHeaderProps) => {
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

export function PortfolioTracker({ assets }: PortfolioTrackerProps) {
  const getTotalValue = (asset: CryptoAsset) => asset.value;

  const sortFunctions = {
    name: (asset: CryptoAsset) => asset.name,
    price: (asset: CryptoAsset) => asset.price,
    "1h": (asset: CryptoAsset) => asset.changes["1h"],
    "12h": (asset: CryptoAsset) => asset.changes["12h"],
    "24h": (asset: CryptoAsset) => asset.changes["24h"],
    "7d": (asset: CryptoAsset) => asset.changes["7d"],
    "30d": (asset: CryptoAsset) => asset.changes["30d"],
    amount: (asset: CryptoAsset) => asset.amount,
    value: (asset: CryptoAsset) => asset.value,
  };

  const { sort, handleSort, sortedData, totalValue } = useTableFunctions<
    CryptoAsset,
    keyof typeof sortFunctions
  >(assets, { field: "name", order: "asc" }, sortFunctions, getTotalValue);

  return (
    <div className="w-full">
      <div className="border rounded-lg overflow-hidden">
        <div className="flex justify-between items-center px-4 py-4 border-b bg-muted/40">
          <div className="flex flex-col gap-1">
            <h2 className="text-base font-medium">{i18n.t("crypto.title")}</h2>
            <span className="text-xs text-muted-foreground">
              {i18n.t("crypto.subtitle")}
            </span>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-xs text-muted-foreground">
              {i18n.t("crypto.portfolioTotal")}
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
                  {i18n.t("crypto.table.headers.asset")}
                </SortableHeader>
                <SortableHeader
                  field="price"
                  currentSort={sort}
                  onSort={handleSort}
                  className="px-2"
                >
                  {i18n.t("crypto.table.headers.price")}
                </SortableHeader>
                <SortableHeader
                  field="1h"
                  currentSort={sort}
                  onSort={handleSort}
                  className="text-center hidden sm:table-cell"
                >
                  1h
                </SortableHeader>
                <SortableHeader
                  field="12h"
                  currentSort={sort}
                  onSort={handleSort}
                  className="text-center hidden sm:table-cell"
                >
                  12h
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
                  {i18n.t("crypto.table.headers.amount")}
                </SortableHeader>
                <SortableHeader
                  field="value"
                  currentSort={sort}
                  onSort={handleSort}
                  className="text-right pl-2"
                >
                  {i18n.t("crypto.table.headers.total")}
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
                    <PriceChange value={asset.changes["1h"]} />
                  </TableCell>
                  <TableCell className="text-center hidden sm:table-cell">
                    <PriceChange value={asset.changes["12h"]} />
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
