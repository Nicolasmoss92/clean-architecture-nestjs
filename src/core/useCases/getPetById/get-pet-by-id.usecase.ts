import { Inject, Injectable } from "@nestjs/common";
import { IPetRepository } from "src/core/ports/pet.repository";
import { IGetPetByIdUseCase } from "./get-pet-by-id.interface";
import { Pet } from "../../../core/entities/pet";
import { PetNotFoundException } from "src/core/exceptions/pet-not-found.exception";

@Injectable()
export class GetPetByIdUseCase implements IGetPetByIdUseCase {
    constructor(
        @Inject('PetRepository') private petRepository: IPetRepository,
    ) {}

    async getById(id: string): Promise<Pet>{
      const pet = await this.petRepository.getPetById(id);
      if (!pet) {
        throw new PetNotFoundException();
      }

      return pet;
    }
}