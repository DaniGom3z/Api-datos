import { Enclosure } from "../domain/entities/Enclosure";
import { EnclosureRepository } from "../domain/repository/EnclosureRepository";

export class CreateEnclosureUseCase {
  constructor(readonly enclosureRepository: EnclosureRepository) {}

  async run(
    temperature: string,
    humidity: string,
    food: string,
    water: string,
    enclosureId: number
  ): Promise<Enclosure | null> {
    try {
      const enclosure = await this.enclosureRepository.createEnclosure(
        temperature,
        humidity,
        food,
        water,
        enclosureId
      );

      return enclosure;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }
}
