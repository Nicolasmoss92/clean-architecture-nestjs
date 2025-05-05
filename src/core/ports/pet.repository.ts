import { Pet } from "../entities/pet";

export interface IPetRepository {
    create(body: Pet): Promise<any>
    all(): Promise<Pet[]>
    getPetById(id: string): Promise<Pet>
    deleteById(id: string): Promise<void>
    updateById(id: string, body: Pet): Promise<Pet>
}