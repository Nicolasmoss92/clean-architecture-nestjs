import { Pet } from "../entities/pet";

export interface IPetRepository {
    create(body: Pet): Promise<any>
    getPetById(id: string): Promise<Pet>
}