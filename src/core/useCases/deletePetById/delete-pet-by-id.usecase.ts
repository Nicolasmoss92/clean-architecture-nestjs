import { Inject, Injectable } from "@nestjs/common";
import { PetRepository } from "src/infrastructure/repositories/pet";
import { IDeletePetByIdUseCase } from "./delete-pet-by-id.interface";
import { IPetRepository } from "src/core/ports/pet.repository";

@Injectable()
export class DeletePetByIdUseCase implements IDeletePetByIdUseCase {
  constructor(
    @Inject('PetRepository') private petRepository: IPetRepository,
  ) { }

  async deleteById(id: string): Promise<void> {
    const pet = await this.petRepository.findById(id);
    if (!pet) {
      throw new NotFoundException(`Pet with id ${id} not found`);
    }
    await this.petRepository.deleteById(id);
  }
}