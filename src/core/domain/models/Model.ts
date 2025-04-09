import DTO from "@/types/http/DTO";

abstract class Model {
  abstract toJSON(): DTO;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static fromJSON(_: DTO): Model {
    throw new Error("you need to implement the fromJSON method");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static fromForm(_: DTO): Model {
    throw new Error("you need to implement the fromForm method");
  }
}

export default Model;
