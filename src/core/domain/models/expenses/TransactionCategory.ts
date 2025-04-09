import DTO from "../../types/http/DTO";
import Model from "../Model";

export default class TransactionCategory extends Model {
  private _id: string;
  private _name: string;
  private _icon: string;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor() {
    super();
    this._id = "";
    this._name = "";
    this._icon = "";
    this._createdAt = new Date();
    this._updatedAt = new Date();
  }

  static fromJSON(json: DTO): TransactionCategory {
    const obj = new TransactionCategory();
    obj._id = String(json["id"]);
    obj._name = String(json["name"]);
    obj._icon = String(json["icon"]);
    obj._createdAt = new Date(json["createdAt"] as string);
    obj._updatedAt = new Date(json["updatedAt"] as string);

    return obj;
  }

  static fromForm(data: DTO): TransactionCategory {
    const obj = new TransactionCategory();
    obj._name = String(data["name"]);
    obj._icon = String(data["icon"]);

    return obj;
  }

  toJSON(): DTO {
    return {
      id: this._id,
      name: this._name,
      icon: this._icon,
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
    };
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get icon(): string {
    return this._icon;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }
}
