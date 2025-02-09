import { useState } from "react";

export type SortOrder = "asc" | "desc";

/**
 * Generic hook for sorting table data.
 *
 * @param data - Array containing the table data.
 * @param initialSort - Object containing the initial sort field and order.
 * @param sortFunctions - Object mapping each field (key) to a function that extracts the comparable value (string or number) from the item.
 * @param getTotalValue - (Optional) Function that receives an item and returns a number to be summed in the total value.
 *
 * @returns Object containing:
 *   - sort: current sort state (field and order),
 *   - handleSort: function that changes the sort when called,
 *   - sortedData: sorted data array,
 *   - totalValue: calculated total value (if getTotalValue is defined).
 */

function useTableFunctions<T, K extends string>(
  data: T[],
  initialSort: { field: K; order: SortOrder },
  sortFunctions: Record<K, (item: T) => string | number>,
  getTotalValue?: (item: T) => number
) {
  // useState to store the current sort state:
  // - field: the column being sorted
  // - order: sort direction ("asc" or "desc")
  // Initially, this state will be the same as the 'initialSort' parameter.
  const [sort, setSort] = useState<{ field: K; order: SortOrder }>(initialSort);

  /**
   * Function that changes the sort state.
   * - If current field is the same as clicked and order is "desc", changes to "asc".
   * - Otherwise, sets the new field and starts with "desc" order.
   */
  const handleSort = (field: K) => {
    setSort((prev) => ({
      field,
      order: prev.field === field && prev.order === "desc" ? "asc" : "desc",
    }));
  };

  /**
   * Creates a copy of the original array and sorts it according to:
   * - The chosen 'sort.field'
   * - The order (asc/desc) defined in 'sort.order'
   *
   * Important: "desc" uses multiplier = 1, "asc" uses -1 to invert the comparison.
   */
  const sortedData = [...data].sort((a, b) => {
    // Defines the multiplier to invert the order if "asc".
    const multiplier = sort.order === "desc" ? 1 : -1;

    // Gets the comparable values using the functions from each field in 'sortFunctions'.
    const valueA = sortFunctions[sort.field](a);
    const valueB = sortFunctions[sort.field](b);

    // For string values, we use localeCompare() to compare them lexicographically:
    // - localeCompare() returns:
    //   * Positive if valueB comes after valueA in the alphabet
    //   * Negative if valueB comes before valueA in the alphabet
    //   * Zero if they are equal
    // - We multiply by the multiplier (1 for desc, -1 for asc) to control sort direction
    // - This ensures proper alphabetical sorting that works with special characters and different locales
    if (typeof valueA === "string" && typeof valueB === "string") {
      return multiplier * valueB.localeCompare(valueA);
    }

    // For numeric values, we subtract them to determine their order:
    // - If valueB > valueA, result is positive (valueB comes first in desc order)
    // - If valueB < valueA, result is negative (valueA comes first in desc order)
    // - The multiplier then inverts this if we want ascending order
    if (typeof valueA === "number" && typeof valueB === "number") {
      return multiplier * (valueB - valueA);
    }

    // If not string or number (or different types), we don't change position.
    return 0;
  });

  /**
   * Calculates the total value (sum) if 'getTotalValue' function is provided.
   * Otherwise, returns 0.
   */
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
