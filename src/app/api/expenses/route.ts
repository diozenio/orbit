import ExpensesMock from "@/infra/mocks/expenses/ExpensesMock";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const mock = new ExpensesMock();
    const expenses = await mock.getExpenses();

    return NextResponse.json(expenses);
  } catch (error) {
    console.error("Error fetching expenses:", error);
    return NextResponse.json(
      { error: "Error fetching expenses" },
      { status: 500 }
    );
  }
}
