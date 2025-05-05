import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Pet } from "../../../core/entities/pet";
import { IPetRepository } from "src/core/ports/pet.repository";
import { IListPetsUseCase } from "./list-pets.interface";

@Injectable()
export class ListPetsUseCase implements IListPetsUseCase {
  constructor(
    @Inject('PetRepository') private petRepository: IPetRepository,
  ) { }

  async list(): Promise<Pet[]> {
    const pet = await this.petRepository.all();

    if (!pet) {
      throw new NotFoundException();
    }

    return pet;
  }
}