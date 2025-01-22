type NumberSeparator = "comma" | "dot";

export const formatNumber = (
  value: string | number,
  separator: NumberSeparator = "comma"
) => {
  if (typeof value === "string") return value;

  const locale = separator === "comma" ? "en-US" : "pt-BR";

  return new Intl.NumberFormat(locale, {
    notation: "standard",
    maximumFractionDigits: 0,
  }).format(value);
};
