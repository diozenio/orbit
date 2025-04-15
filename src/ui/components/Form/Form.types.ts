import { Form } from "@/ui/primitives/form";
import { ComponentProps } from "react";

export type FormComponentProps = Omit<ComponentProps<typeof Form>, "children">;
