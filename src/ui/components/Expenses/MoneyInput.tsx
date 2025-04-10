import { Input } from "@/ui/primitives/input";
import { Label } from "@/ui/primitives/label";

interface MoneyInputProps {
  id: string;
  label: string;
  placeholder?: string;
}

function MoneyInput({ id, label, placeholder = "0.00" }: MoneyInputProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Input
          id={id}
          className="peer pe-12 ps-8"
          placeholder={placeholder}
          type="text"
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

export default MoneyInput;
