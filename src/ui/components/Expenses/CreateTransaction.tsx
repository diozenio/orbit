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
import MoneyInput from "./MoneyInput";
import { TextInput } from "../Form/TextInput";
import { useTransactions } from "@/hooks/useTransactions";
import { Combobox } from "../Form/Combobox";
import TransactionCategory from "@/models/expenses/TransactionCategory";
import { ComboboxItem } from "../Form/Combobox/parts";

function getComboboxItems(categories?: TransactionCategory[]): ComboboxItem[] {
  return (
    categories?.map((category) => ({
      label: category.name,
      value: category.id,
      icon: category.icon,
    })) || []
  );
}

function CreateTransaction() {
  const { categories } = useTransactions();

  const comboboxItems = getComboboxItems(categories);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <CirclePlus />
          {i18n.t("expenses.actions.createTransaction.trigger")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <form className="contents">
          <DialogHeader>
            <DialogTitle>
              {i18n.t("expenses.actions.createTransaction.dialog.title")}
            </DialogTitle>
            <DialogDescription>
              {i18n.t("expenses.actions.createTransaction.dialog.description")}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <TextInput
              id="title"
              label={i18n.t(
                "expenses.actions.createTransaction.dialog.inputs.title.label"
              )}
              placeholder={i18n.t(
                "expenses.actions.createTransaction.dialog.inputs.title.placeholder"
              )}
            />
            <MoneyInput
              id="amount"
              label={i18n.t(
                "expenses.actions.createTransaction.dialog.inputs.amount.label"
              )}
            />
            <Combobox
              items={comboboxItems}
              label={i18n.t(
                "expenses.actions.createTransaction.dialog.inputs.combobox.label"
              )}
              placeholder={i18n.t(
                "expenses.actions.createTransaction.dialog.inputs.combobox.placeholder"
              )}
            />
          </div>
          <DialogFooter>
            <Button type="submit">
              {i18n.t("expenses.actions.editExpenses.dialog.submit")}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default CreateTransaction;
