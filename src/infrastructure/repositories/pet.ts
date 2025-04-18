import { Pet } from "src/core/entities/pet";
import { IPetRepository } from "src/core/ports/pet.repository";

export class PetRepository implements IPetRepository {

  async create(): Promise<any> {
    return;
  }
}