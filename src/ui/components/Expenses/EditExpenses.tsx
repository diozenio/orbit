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
import { useSetMonthlyLimit } from "@/hooks/useSetMonthlyLimit";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

const schema = z.object({
  limit: z.coerce
    .number({
      invalid_type_error: i18n.t(
        "expenses.actions.dialog.inputs.monthlyLimit.errors.invalid"
      ),
    })
    .min(1, i18n.t("expenses.actions.dialog.inputs.monthlyLimit.errors.min")),
});

type FormData = z.infer<typeof schema>;

function EditExpenses({ defaultLimit = 0 }: { defaultLimit?: number }) {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const { mutate: setLimit, isPending } = useSetMonthlyLimit();

  const { handleSubmit, register } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { limit: defaultLimit },
  });

  const onSubmit = (data: FormData) => {
    setLimit(
      { limit: data.limit },
      {
        onSuccess: () => {
          setOpen(false);

          queryClient.invalidateQueries({ queryKey: ["expenses"] });
        },
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Edit />
          {i18n.t("expenses.actions.trigger")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)} className="contents">
          <DialogHeader>
            <DialogTitle>{i18n.t("expenses.actions.dialog.title")}</DialogTitle>
            <DialogDescription>
              {i18n.t("expenses.actions.dialog.description")}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <MoneyInput
              id="weeklyLimit"
              {...register("limit", { required: true })}
              label={i18n.t(
                "expenses.actions.dialog.inputs.monthlyLimit.label"
              )}
            />
          </div>
          <DialogFooter>
            <Button type="submit" loading={isPending}>
              {i18n.t("expenses.actions.dialog.submit")}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditExpenses;
