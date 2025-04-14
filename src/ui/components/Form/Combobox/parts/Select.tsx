import { Button } from "@/ui/primitives/button";
import { PopoverTrigger } from "@/ui/primitives/popover";
import { ChevronsUpDown } from "lucide-react";
import { ComboboxItem } from "./Combobox.types";

interface SelectProps {
  placeholder?: string;
  selected?: ComboboxItem | null;
}

function Select({ placeholder, selected }: SelectProps) {
  return (
    <PopoverTrigger asChild>
      <Button variant="outline" className="w-full justify-between">
        {selected ? (
          <div className="flex items-center">
            <selected.icon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            {selected.label}
          </div>
        ) : (
          <>{placeholder}</>
        )}
        <ChevronsUpDown className="opacity-50" />
      </Button>
    </PopoverTrigger>
  );
}

export default Select;
