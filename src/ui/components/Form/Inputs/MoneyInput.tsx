import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/primitives/form";
import { Input } from "@/ui/primitives/input";
import { ComponentProps } from "react";
import { useFormContext } from "../FormContext";
import { cn } from "@/lib/utils";

interface MoneyInputProps extends ComponentProps<typeof Input> {
  label?: string;
  name: string;
}

function MoneyInput({
  label,
  name,
  className,
  placeholder = "0.00",
  ...rest
}: MoneyInputProps) {
  const { control } = useFormContext();

  return (
    <FormField
      name={name}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      control={control as any}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <div className="relative">
              <Input
                {...rest}
                {...field}
                placeholder={placeholder}
                className={cn("peer pe-12 ps-8", className)}
              />
              <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm text-muted-foreground peer-disabled:opacity-50">
                R$
              </span>
              <span className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-sm text-muted-foreground peer-disabled:opacity-50">
                BRL
              </span>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default MoneyInput;
