import { createContext, useContext } from "react";
import { UseFormReturn, FieldValues } from "react-hook-form";

const FormContext = createContext<UseFormReturn<FieldValues> | null>(null);

export function useFormContext<T extends FieldValues>() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext should be used within <Form.Root>");
  }
  return context as UseFormReturn<T>;
}

export default FormContext;
