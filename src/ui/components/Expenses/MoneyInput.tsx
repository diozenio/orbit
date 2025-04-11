import * as React from "react";
import { Input } from "@/ui/primitives/input";
import { Label } from "@/ui/primitives/label";

interface MoneyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const MoneyInput = React.forwardRef<HTMLInputElement, MoneyInputProps>(
  ({ id, label, placeholder = "0.00", ...props }, ref) => {
    return (
      <div className="space-y-2">
        <Label htmlFor={id}>{label}</Label>
        <div className="relative">
          <Input
            id={id}
            placeholder={placeholder}
            type="text"
            className="peer pe-12 ps-8"
            ref={ref}
            {...props}
          />
          <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm text-muted-foreground peer-disabled:opacity-50">
            R$
          </span>
          <span className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-sm text-muted-foreground peer-disabled:opacity-50">
            BRL
          </span>
        </div>
      </div>
    );
  }
);

MoneyInput.displayName = "MoneyInput";
export default MoneyInput;
