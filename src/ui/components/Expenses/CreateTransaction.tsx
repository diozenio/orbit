import { i18n } from "@/i18n";
import { Button } from "@/ui/primitives/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Dialog,
  DialogFooter,
} from "@/ui/primitives/dialog";
import { CirclePlus } from "lucide-react";
import { useTransactions } from "@/hooks/useTransactions";
import { z } from "zod";
import { useCreateTransaction } from "@/hooks/useCreateTransaction";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import Transaction from "@/core/domain/models/expenses/Transaction";
import { Form } from "../Form";
import TransactionCategory from "@/core/domain/models/expenses/TransactionCategory";
import { ComboboxItem } from "../Form/Inputs/Combobox";

function getComboboxItems(categories?: TransactionCategory[]): ComboboxItem[] {
  return (
    categories?.map((category) => ({
      label: category.name,
      value: category.id,
      icon: category.icon,
    })) || []
  );
}

const schema = z.object({
  title: z
    .string({ required_error: "Title is required" })
    .max(50, "Title must be less than 50 characters"),
  amount: z.coerce
    .number({
      required_error: "Amount is required",
      invalid_type_error: "Please enter a valid amount",
    })
    .refine((val) => val !== 0, {
      message: "Amount must be different from 0",
    }),
  transactionCategoryId: z
    .string({ required_error: "Please select a category" })
    .uuid("Invalid transaction category ID"),
});

type FormData = z.infer<typeof schema>;

function CreateTransaction() {
  const queryClient = useQueryClient();
  const { categories } = useTransactions();
  const { mutate: createTransaction } = useCreateTransaction();
  const comboboxItems = getComboboxItems(categories);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const transaction = Transaction.fromForm(data);

    createTransaction([transaction], {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["expenses"] });
      },
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <CirclePlus />
          {i18n.t("expenses.actions.createTransaction.trigger")}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px]">
        <Form.Root form={form} onSubmit={form.handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>
              {i18n.t("expenses.actions.createTransaction.dialog.title")}
            </DialogTitle>
            <DialogDescription>
              {i18n.t("expenses.actions.createTransaction.dialog.description")}
            </DialogDescription>
          </DialogHeader>

          <div className="py-6 space-y-4">
            <Form.TextInput
              name="title"
              label={i18n.t(
                "expenses.actions.createTransaction.dialog.inputs.title.label"
              )}
              placeholder={i18n.t(
                "expenses.actions.createTransaction.dialog.inputs.title.placeholder"
              )}
            />
            <Form.MoneyInput
              name="amount"
              label={i18n.t(
                "expenses.actions.createTransaction.dialog.inputs.amount.label"
              )}
            />
            <Form.Combobox
              label={i18n.t(
                "expenses.actions.createTransaction.dialog.inputs.combobox.label"
              )}
              placeholder={i18n.t(
                "expenses.actions.createTransaction.dialog.inputs.combobox.placeholder"
              )}
              name="transactionCategoryId"
              items={comboboxItems}
            />
          </div>

          <DialogFooter>
            <Button type="submit">
              {i18n.t("expenses.actions.editExpenses.dialog.submit")}
            </Button>
          </DialogFooter>
        </Form.Root>
      </DialogContent>
    </Dialog>
  );
}

export default CreateTransaction;
