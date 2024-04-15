import { Enclosure } from "../entities/Enclosure";

export interface EnclosureRepository {
  createEnclosure(
    temperature: string,
    humidity: string,
    food: string,
    water: string,
    enclosureId: number,
    date: string,
  ): Promise<Enclosure | null>;
}
