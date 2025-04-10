import { Button } from "@/ui/primitives/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/primitives/dialog";
import { Edit } from "lucide-react";
import MoneyInput from "./MoneyInput";
import { i18n } from "@/i18n";

function EditExpenses() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Edit />
          {i18n.t("expenses.actions.trigger")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{i18n.t("expenses.actions.dialog.title")}</DialogTitle>
          <DialogDescription>
            {i18n.t("expenses.actions.dialog.description")}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <MoneyInput
            id="weeklyLimit"
            label={i18n.t("expenses.actions.dialog.inputs.monthlyLimit")}
          />
        </div>
        <DialogFooter>
          <Button type="submit">
            {i18n.t("expenses.actions.dialog.submit")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditExpenses;
