import { Inject, Injectable } from "@nestjs/common";
import { IPetRepository } from "src/core/ports/pet.repository";
import { IGetPetByIdUseCase } from "./get-pet-by-id.interface";
import { Pet } from "../../../core/entities/pet";

@Injectable()
export class GetPetByIdUseCase implements IGetPetByIdUseCase {
    constructor(
        @Inject('PetRepository') private petRepository: IPetRepository,
    ) {}

    async getById(id: string): Promise<Pet>{
      return;
    }
}