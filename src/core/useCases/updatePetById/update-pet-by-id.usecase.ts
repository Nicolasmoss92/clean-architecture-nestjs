import { Inject, Injectable } from "@nestjs/common";
import { IPetRepository } from "src/core/ports/pet.repository";
import { IUpdatePetByIdUseCase } from "./update-pet-by-id.interface";
import { Pet } from "../../../core/entities/pet";

@Injectable()
export class UpdatePetByIdUseCase implements IUpdatePetByIdUseCase {
    constructor(
        @Inject('PetRepository') private petRepository: IPetRepository,
    ) {}

    async updateById(id: string): Promise<Pet>{
      return;
    }
}