import { FormEventHandler } from "react";
import { UseFormReturn, FieldValues } from "react-hook-form";
import FormContext from "./FormContext";
import { Form } from "@/ui/primitives/form";

interface RootProps<T extends FieldValues> {
  children: React.ReactNode;
  className?: string;
  onSubmit?: FormEventHandler<HTMLFormElement> | undefined;

  form: UseFormReturn<T>;
}

function Root<T extends FieldValues>({
  onSubmit,
  className,
  children,
  form,
}: RootProps<T>) {
  return (
    <FormContext.Provider value={form as UseFormReturn<FieldValues>}>
      <Form {...form}>
        <form onSubmit={onSubmit} className={className}>
          {children}
        </form>
      </Form>
    </FormContext.Provider>
  );
}

export default Root;
