import { cn } from "@/lib/utils";
import { CommandItem } from "@/ui/primitives/command";
import { ComboboxItem } from "./Combobox.types";

interface ItemProps extends ComboboxItem {
  selected?: boolean;
  onSelect?: (value: string) => void;
}

function Item({ icon: Icon, label, value, onSelect, selected }: ItemProps) {
  return (
    <CommandItem key={value} value={value} onSelect={onSelect}>
      <Icon
        className={cn("h-4 w-4", selected ? "opacity-100" : "opacity-40")}
      />
      <span>{label}</span>
    </CommandItem>
  );
}

export default Item;
