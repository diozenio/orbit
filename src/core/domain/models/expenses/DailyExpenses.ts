import Model from "@/models/Model";
import DTO from "@/types/http/DTO";

export interface DailyExpensesDTO extends DTO {
  date: string;
  amount: number;
  day: string;
}

export default class DailyExpenses extends Model {
  constructor(
    private readonly date: Date,
    private readonly amount: number,
    private readonly day: string
  ) {
    super();
  }

  static override fromJSON(json: DailyExpensesDTO): DailyExpenses {
    const date = new Date(json.date);

    return new DailyExpenses(
      date,
      json.amount,
      date.toLocaleDateString("pt-BR", { weekday: "long" })
    );
  }

  override toJSON(): DailyExpensesDTO {
    return {
      date: this.date.toISOString(),
      amount: this.amount,
      day: this.day,
    };
  }

  getDate(): Date {
    return this.date;
  }

  getAmount(): number {
    return this.amount;
  }

  getDay(): string {
    return this.day;
  }
}
