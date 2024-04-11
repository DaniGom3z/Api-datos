import { CreateEnclosureUseCase } from "../application/CreateEnclosureUseCase";
import { CreateEnclosureController } from "./controllers/CreateEnclosureController";
import { MysqlEnclosureRepository } from "./dbRepository/MysqlEnclosureRepository";

export const mysqlEnclosureRepository = new MysqlEnclosureRepository();

export const createEnclosureUseCase = new CreateEnclosureUseCase(
  mysqlEnclosureRepository
);
export const createEnclosureController = new CreateEnclosureController(
  createEnclosureUseCase
);
