export interface IDeletePetByIdUseCase {
  deleteById(id: string): Promise<void>;
}
