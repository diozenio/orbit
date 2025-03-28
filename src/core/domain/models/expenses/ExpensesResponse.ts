import DTO from "@/types/http/DTO";
import DailyExpenses, { DailyExpensesDTO } from "./DailyExpenses";
import Model from "../Model";

export interface ExpensesResponseDTO extends DTO {
  dailyExpenses: DailyExpensesDTO[];
  totalSpent: number;
  dailyLimit: number;
  monthlyLimit: number;
  remaining: number;
  startMonth: string;
  endMonth: string;
  year: string;
}

export default class ExpensesResponse extends Model {
  constructor(
    public readonly dailyExpenses: DailyExpenses[],
    public readonly totalSpent: number,
    public readonly dailyLimit: number,
    public readonly monthlyLimit: number,
    public readonly remaining: number,
    public readonly startMonth: string,
    public readonly endMonth: string,
    public readonly year: string
  ) {
    super();
  }

  static override fromJSON(json: ExpensesResponseDTO): ExpensesResponse {
    const test = new ExpensesResponse(
      json.dailyExpenses.map(DailyExpenses.fromJSON),
      json.totalSpent,
      json.dailyLimit,
      json.monthlyLimit,
      json.remaining,
      json.startMonth,
      json.endMonth,
      json.year
    );

    return test;
  }

  override toJSON(): ExpensesResponseDTO {
    return {
      dailyExpenses: this.dailyExpenses.map((dailyExpense) =>
        dailyExpense.toJSON()
      ),
      totalSpent: this.totalSpent,
      dailyLimit: this.dailyLimit,
      monthlyLimit: this.monthlyLimit,
      remaining: this.remaining,
      startMonth: this.startMonth,
      endMonth: this.endMonth,
      year: this.year,
    };
  }

  getDailyExpenses(): DailyExpenses[] {
    return this.dailyExpenses;
  }

  getTotalSpent(): number {
    return this.totalSpent;
  }

  getDailyLimit(): number {
    return this.dailyLimit;
  }

  getMonthlyLimit(): number {
    return this.monthlyLimit;
  }

  getRemaining(): number {
    return this.remaining;
  }

  getStartMonth(): string {
    return this.startMonth;
  }

  getEndMonth(): string {
    return this.endMonth;
  }

  getYear(): string {
    return this.year;
  }
}
