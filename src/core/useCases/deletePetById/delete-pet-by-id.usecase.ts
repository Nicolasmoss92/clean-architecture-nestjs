import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { IDeletePetByIdUseCase } from "./delete-pet-by-id.interface";
import { IPetRepository } from "src/core/ports/pet.repository";
import { PetNotFoundException } from "src/core/exceptions/pet-not-found.exception";

@Injectable()
export class DeletePetByIdUseCase implements IDeletePetByIdUseCase {
  constructor(
    @Inject('PetRepository') private petRepository: IPetRepository,
  ) { }

  async deleteById(id: string): Promise<void> {
    const pet = await this.petRepository.getPetById(id);
    if (!pet) {
      throw new PetNotFoundException();
    }
    await this.petRepository.deleteById(id);
  }
}