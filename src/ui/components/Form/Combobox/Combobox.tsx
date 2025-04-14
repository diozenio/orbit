"use client";

import { useEffect, useState, ReactNode } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from "@/primitives/command";
import { Popover, PopoverContent } from "@/primitives/popover";
import { Label } from "@/primitives/label";
import { Item, Select, type ComboboxItem } from "./parts";

interface ComboboxProps {
  label?: string;
  placeholder?: string;
  items: ComboboxItem[];
  value?: string;
  onChange?: (item: ComboboxItem | null) => void;
  empty?: ReactNode;
  onInput?: (value: string) => void;
}

function Combobox({
  label,
  placeholder,
  items,
  value,
  onChange,
  empty,
  onInput,
}: ComboboxProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<ComboboxItem | null>(null);

  useEffect(() => {
    if (value) {
      const found = items.find((item) => item.value === value) || null;
      setSelected(found);
    }
  }, [value, items]);

  const handleUnselect = () => {
    setSelected(null);
    onChange?.(null);
    setOpen(false);
  };

  const handleSelect = (value: string) => {
    const selectedItem = items.find((item) => item.value === value) || null;

    if (selectedItem?.value === selected?.value) {
      handleUnselect();
      return;
    }

    setSelected(selectedItem);
    onChange?.(selectedItem);
    setOpen(false);
  };

  return (
    <div className="flex flex-col space-y-2">
      <Label onClick={() => setOpen(true)}>{label}</Label>
      <Popover open={open} onOpenChange={setOpen} modal>
        <Select placeholder={placeholder} selected={selected} />
        <PopoverContent className="p-0" side="top" align="start">
          <Command>
            <CommandInput placeholder={placeholder} onValueChange={onInput} />
            <CommandList>
              <CommandEmpty>{empty}</CommandEmpty>
              <CommandGroup>
                {items.map((item) => (
                  <Item
                    key={item.value}
                    {...item}
                    selected={selected?.value === item.value}
                    onSelect={handleSelect}
                  />
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default Combobox;
