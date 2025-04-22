import { Pet } from "src/core/entities/pet";

export interface IGetPetByIdUseCase{
    getById(id: string): Promise<Pet>
}