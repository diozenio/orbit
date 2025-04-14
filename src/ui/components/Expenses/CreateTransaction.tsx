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

function CreateTransaction() {
  return (
    <Dialog defaultOpen>
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
