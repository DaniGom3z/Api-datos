export class Enclosure {
  constructor(
    readonly id: number,
    readonly temperature: string,
    readonly humidity: string,
    readonly food: string,
    readonly water: string,
    readonly enclosureId: number
  ) {}
}
