import * as React from "react";
import { Input } from "@/ui/primitives/input";
import { Label } from "@/ui/primitives/label";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ id, label, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <Label htmlFor={id}>{label}</Label>
        <Input id={id} type="text" ref={ref} {...props} />
      </div>
    );
  }
);

TextInput.displayName = "TextInput";
export default TextInput;
