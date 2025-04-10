import { cn } from "@/lib/utils";
import { LucideProps, Orbit } from "lucide-react";

const spinners = {
  orbit: Orbit,
};

export type SpinnerType = keyof typeof spinners;

interface SpinnerProps extends Omit<LucideProps, "type"> {
  type?: SpinnerType;
}

export function Spinner({
  type = "orbit",
  className,
  color = "hsl(var(--muted-foreground))",
  strokeWidth = 1,
  size = 24,
  ...rest
}: SpinnerProps) {
  const SpinnerIcon = spinners[type];

  return (
    <SpinnerIcon
      className={cn("animate-spin !duration-[1.5s]", className)}
      color={color}
      strokeWidth={strokeWidth}
      size={size}
      {...rest}
    />
  );
}
