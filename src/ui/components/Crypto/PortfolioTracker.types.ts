export interface CryptoAsset {
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

export type SortField =
  | "name"
  | "price"
  | "1h"
  | "12h"
  | "24h"
  | "7d"
  | "30d"
  | "amount"
  | "value";

export type SortOrder = "asc" | "desc";

export interface SortableHeaderProps {
  field: SortField;
  children: React.ReactNode;
  currentSort: { field: SortField; order: SortOrder };
  onSort: (field: SortField) => void;
  className?: string;
}

export interface PriceChangeProps {
  value: number;
}

export interface PortfolioTrackerProps {
  assets: CryptoAsset[];
}
