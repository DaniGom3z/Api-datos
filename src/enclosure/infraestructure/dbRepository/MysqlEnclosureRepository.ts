import { PrismaClient } from "@prisma/client";

import { Enclosure } from "../../domain/entities/Enclosure";
import { EnclosureRepository } from "../../domain/repository/EnclosureRepository";

export class MysqlEnclosureRepository implements EnclosureRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createEnclosure(
    temperature: string,
    humidity: string,
    food: string,
    water: string,
    enclosureId: number,
    datoId: number,
    date:string
  ): Promise<Enclosure | null> {
    try {
      const createdEnclosure = await this.prisma.datos.create({
        data: {
          temperature,
          humidity,
          food,
          water,
          enclosureId,
          datoId,
          date
        },
      });
      return createdEnclosure;
    } catch (error) {
      console.error("Error creating enclosure:", error);
      return null;
    }
  }
}
