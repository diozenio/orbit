import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/primitives/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/ui/primitives/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/ui/primitives/command";
import { Button } from "@/ui/primitives/button";
import { ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useFormContext } from "../FormContext";
import { Icon } from "@/ui/primitives/icon";
import { useEffect, useRef, useState } from "react";

export interface ComboboxItem {
  label: string;
  value: string;
  icon?: string;
}

interface ComboboxProps {
  name: string;
  label?: string;
  description?: string;
  placeholder?: string;
  items: ComboboxItem[];
  className?: string;
}

interface ItemProps extends ComboboxItem {
  selected?: boolean;
  onSelect?: (value: string) => void;
}

function Item({ icon, label, value, onSelect, selected }: ItemProps) {
  return (
    <CommandItem key={value} value={value} onSelect={onSelect}>
      {icon && (
        <Icon
          name={icon}
          className={cn("h-4 w-4", selected ? "opacity-100" : "opacity-40")}
        />
      )}
      <span>{label}</span>
    </CommandItem>
  );
}

function Combobox({
  name,
  label,
  description,
  placeholder = "Select...",
  items,
  className,
}: ComboboxProps) {
  const { control, setValue, getValues } = useFormContext();
  const [open, setOpen] = useState(false);
  const currentValue = getValues(name);
  const currentItem = items.find((item) => item.value === currentValue);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [width, setWidth] = useState<number>();

  useEffect(() => {
    if (triggerRef.current) {
      setWidth(triggerRef.current.offsetWidth);
    }
  }, [open]);

  const handleUnselect = () => {
    setValue(name, null);
    setOpen(false);
  };

  const handleSelect = (value: string) => {
    const selectedItem = items.find((item) => item.value === value) || null;

    if (selectedItem?.value === currentValue) {
      handleUnselect();
      return;
    }

    setValue(name, value);
    setOpen(false);
  };

  return (
    <FormField
      name={name}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      control={control as any}
      render={({ field }) => (
        <FormItem className={cn("flex flex-col", className)}>
          {label && <FormLabel className="w-fit">{label}</FormLabel>}
          <Popover open={open} onOpenChange={setOpen} modal>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  className="w-full justify-between"
                  ref={triggerRef}
                >
                  {currentItem ? (
                    <div className="flex items-center">
                      {currentItem.icon && (
                        <Icon
                          name={currentItem.icon}
                          className="mr-2 h-4 w-4 shrink-0 opacity-50"
                        />
                      )}
                      {currentItem.label}
                    </div>
                  ) : (
                    <>{placeholder}</>
                  )}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="p-0" side="top" style={{ width }}>
              <Command>
                <CommandInput placeholder={placeholder} />
                <CommandList>
                  <CommandEmpty>No item found.</CommandEmpty>
                  <CommandGroup>
                    {items.map((item) => (
                      <Item
                        key={item.value}
                        {...item}
                        selected={field.value === item.value}
                        onSelect={handleSelect}
                      />
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default Combobox;
