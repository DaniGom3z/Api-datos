import { Request, Response } from "express";

import { CreateEnclosureUseCase } from "../../application/CreateEnclosureUseCase";

export class CreateEnclosureController {
  constructor(readonly createEnclosureUseCase: CreateEnclosureUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const enclosure = await this.createEnclosureUseCase.run(
        data.temperature,
        data.humidity,
        data.food,
        data.water,
        data.enclosureId,
        data.datoId,
        data.date
      );

      if (enclosure)
        //Code HTTP : 201 -> Creado
        res.status(201).send({
          status: "success",
          data: {
            id: enclosure?.id,
            temperature: enclosure?.temperature,
            humidity: enclosure?.humidity,
            food: enclosure?.food,
            water: enclosure?.water,
            enclosureId: enclosure?.enclosureId,
            datoId: enclosure?.datoId,
            date: enclosure?.date,
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "No fue posible agregar el encierro",
        });
    } catch (error) {
      //Code HTTP : 204 Sin contenido
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
