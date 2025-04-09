import DTO from "../../types/http/DTO";
import Model from "../Model";

export type TransactionType = "INCOME" | "EXPENSE";

export default class Transaction extends Model {
  private _id: string;
  private _title: string;
  private _type: TransactionType;
  private _amount: number;
  private _createdAt: Date;
  private _updatedAt: Date;
  private _transactionCategoryId: string;

  constructor() {
    super();
    this._id = "";
    this._title = "";
    this._type = "EXPENSE";
    this._amount = 0;
    this._createdAt = new Date();
    this._updatedAt = new Date();
    this._transactionCategoryId = "";
  }

  static fromJSON(json: DTO): Transaction {
    const obj = new Transaction();
    obj._id = String(json["id"]);
    obj._title = String(json["title"]);
    obj._type = json["type"] as TransactionType;
    obj._amount = Number(json["amount"]);
    obj._createdAt = new Date(json["createdAt"] as string);
    obj._updatedAt = new Date(json["updatedAt"] as string);
    obj._transactionCategoryId = String(json["transactionCategoryId"]);

    return obj;
  }

  static fromForm(data: DTO): Transaction {
    const obj = new Transaction();

    obj._title = String(data["title"]);
    obj._type = data["type"] as TransactionType;
    obj._amount = Number(data["amount"]);
    obj._transactionCategoryId = String(data["transactionCategoryId"]);

    return obj;
  }

  toJSON(): DTO {
    return {
      id: this._id,
      title: this._title,
      type: this._type,
      amount: this._amount,
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
      transactionCategoryId: this._transactionCategoryId,
    };
  }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get type(): TransactionType {
    return this._type;
  }

  get amount(): number {
    return this._amount;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  get transactionCategoryId(): string {
    return this._transactionCategoryId;
  }
}
