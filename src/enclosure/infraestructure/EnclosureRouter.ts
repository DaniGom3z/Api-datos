import express from "express";

import { createEnclosureController } from "./dependencies";
export const enclosureRouter = express.Router();

enclosureRouter.post(
  "/",
  createEnclosureController.run.bind(createEnclosureController)
);
