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

interface TextInputProps extends ComponentProps<typeof Input> {
  label?: string;
  name: string;
}

function TextInput({ label, name, ...rest }: TextInputProps) {
  const { control } = useFormContext();

  return (
    <FormField
      name={name}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      control={control as any}
      render={({ field }) => {
        const { value, ...f } = field;

        return (
          <FormItem>
            {label && <FormLabel>{label}</FormLabel>}
            <FormControl>
              <Input {...rest} value={value ?? ""} {...f} />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}

export default TextInput;
