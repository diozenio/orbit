import { useState } from "react";

export type SortOrder = "asc" | "desc";

/**
 * Generic hook for sorting table data.
 *
 * @param data - Array containing the table data.
 * @param initialSort - Object with initial sort field and order.
 * @param sortFunctions - Object mapping each field (key) to a function that extracts the comparable value (string or number) from the item.
 * @param getTotalValue - (Optional) Function that takes an item and returns a number to be summed for the total.
 *
 * @returns Object containing sort state, sort change function, sorted data, total value (if defined) and currency formatting function.
 */

function useTableFunctions<T, K extends string>(
  data: T[],
  initialSort: { field: K; order: SortOrder },
  sortFunctions: Record<K, (item: T) => string | number>,
  getTotalValue?: (item: T) => number
) {
  const [sort, setSort] = useState<{ field: K; order: SortOrder }>(initialSort);

  const handleSort = (field: K) => {
    setSort((prev) => ({
      field,
      order: prev.field === field && prev.order === "desc" ? "asc" : "desc",
    }));
  };

  const sortedData = [...data].sort((a, b) => {
    const multiplier = sort.order === "desc" ? 1 : -1;
    const valueA = sortFunctions[sort.field](a);
    const valueB = sortFunctions[sort.field](b);

    if (typeof valueA === "string" && typeof valueB === "string") {
      return multiplier * valueB.localeCompare(valueA);
    }

    if (typeof valueA === "number" && typeof valueB === "number") {
      return multiplier * (valueB - valueA);
    }

    return 0;
  });

  const totalValue = getTotalValue
    ? sortedData.reduce((acc, item) => acc + getTotalValue(item), 0)
    : 0;

  return {
    sort,
    handleSort,
    sortedData,
    totalValue,
  };
}

export { useTableFunctions };
